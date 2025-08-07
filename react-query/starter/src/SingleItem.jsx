import { useMutation, useQueryClient } from '@tanstack/react-query'
import customFetch from './utils'

const SingleItem = ({ item }) => {
  const queryClient = useQueryClient()

  const { mutate: changeTask } = useMutation({
    mutationFn: ({ taskId, isDone }) =>
      customFetch.patch(`/${taskId}`, { isDone }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })
  const { mutate: deleteTask, isPending } = useMutation({
    mutationFn: (taskId) => customFetch.delete(`/${taskId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => changeTask({ taskId: item.id, isDone: !item.isDone })}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.isDone && 'line-through',
        }}
      >
        {item.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        disabled={isPending}
        onClick={() => deleteTask(item.id)}
      >
        delete
      </button>
    </div>
  )
}
export default SingleItem
