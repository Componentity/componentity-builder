import Modal from './modal/modal'
import useModal from './modal/useModal'
import ComponentsFilter from './ComponentsFilter'
export default function AddSection() {
  const { isShowing, toggle } = useModal()

  return (
    <div className='border-4 border-dashed border-gray-300 rounded-lg h-56 flex items-center justify-center'>
      <button
        onClick={toggle}
        className='uppercase font-semibold text-white cursor-pointer bg-indigo-600 ring-2 ring-indigo-500 px-4 py-2 rounded-sm'
      >
        Add Sections or Pages
      </button>
      <Modal isShowing={isShowing} hide={toggle}>
        <ComponentsFilter />
      </Modal>
    </div>
  )
}
