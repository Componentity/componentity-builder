import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div
            className='fixed z-10 inset-0 overflow-y-auto'
            aria-labelledby='modal-title'
            role='dialog'
            aria-modal='true'
          >
            <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
              <div
                onClick={hide}
                className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
                aria-hidden='true'
              ></div>

              <span
                className='hidden sm:inline-block sm:align-middle sm:h-screen'
                aria-hidden='true'
              >
                &#8203;
              </span>

              <div className='absolute top-0 right-0 left-0 bg-white mx-auto m-5 sm:m-8 rounded-lg md:m-16'>
                <div>
                  <div
                    className='fixed inset-0 flex z-40 lg:hidden'
                    role='dialog'
                    aria-modal='true'
                  >
                    <div className='fixed inset-0 bg-black bg-opacity-25' aria-hidden='true'></div>
                  </div>

                  <main className='container mx-auto'>
                    <section aria-labelledby='products-heading' className='p-4 sm:p-6 lg:p-8'>
                      <h2 id='products-heading' className='sr-only'>
                        Products
                      </h2>

                      <div className='grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10'>
                        <div className='lg:col-span-2'>
                          <form className='hidden lg:block sticky top-0'>
                            <h3 className='sr-only'>Categories</h3>
                            <div className=''>
                              <h3 className='-my-3 flow-root'>
                                <button
                                  type='button'
                                  className='py-3 bg-white text-left w-full text-sm text-gray-400 hover:text-gray-500'
                                  aria-controls='filter-section-0'
                                  aria-expanded='false'
                                >
                                  <span className='uppercase font-medium text-gray-900'>
                                    Filter Categories
                                  </span>
                                </button>
                              </h3>
                              <div className='pt-3' id='filter-section-0'>
                                <div className='space-y-4'>
                                  <div className='flex items-center'>
                                    <input
                                      id='filter-color-0'
                                      name='color[]'
                                      value='white'
                                      type='checkbox'
                                      className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
                                    />
                                    <label
                                      htmlFor='filter-color-0'
                                      className='ml-3 text-sm text-gray-600'
                                    >
                                      White
                                    </label>
                                  </div>

                                  <div className='flex items-center'>
                                    <input
                                      id='filter-color-1'
                                      name='color[]'
                                      value='beige'
                                      type='checkbox'
                                      className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
                                    />
                                    <label
                                      htmlFor='filter-color-1'
                                      className='ml-3 text-sm text-gray-600'
                                    >
                                      Beige
                                    </label>
                                  </div>

                                  <div className='flex items-center'>
                                    <input
                                      id='filter-color-2'
                                      name='color[]'
                                      value='blue'
                                      type='checkbox'
                                      checked
                                      className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
                                    />
                                    <label
                                      htmlFor='filter-color-2'
                                      className='ml-3 text-sm text-gray-600'
                                    >
                                      Blue
                                    </label>
                                  </div>

                                  <div className='flex items-center'>
                                    <input
                                      id='filter-color-3'
                                      name='color[]'
                                      value='brown'
                                      type='checkbox'
                                      className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
                                    />
                                    <label
                                      htmlFor='filter-color-3'
                                      className='ml-3 text-sm text-gray-600'
                                    >
                                      Brown
                                    </label>
                                  </div>

                                  <div className='flex items-center'>
                                    <input
                                      id='filter-color-4'
                                      name='color[]'
                                      value='green'
                                      type='checkbox'
                                      className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
                                    />
                                    <label
                                      htmlFor='filter-color-4'
                                      className='ml-3 text-sm text-gray-600'
                                    >
                                      Green
                                    </label>
                                  </div>

                                  <div className='flex items-center'>
                                    <input
                                      id='filter-color-5'
                                      name='color[]'
                                      value='purple'
                                      type='checkbox'
                                      className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
                                    />
                                    <label
                                      htmlFor='filter-color-5'
                                      className='ml-3 text-sm text-gray-600'
                                    >
                                      Purple
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className='lg:col-span-10'>
                          <div className=''>
                            <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                              <div className='PRODUCT group relative mb-3'>
                                <div className='border-4 border-white hover: border-indigo-600 p-1 w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none'>
                                  <img
                                    src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'
                                    alt='Front of men&#039;s Basic Tee in black.'
                                    className='w-full h-full object-center object-cover lg:w-full lg:h-full'
                                  />
                                </div>
                                <div className='mt-4 text-left'>
                                  <h3 className='text-sm text-gray-700 uppercase font-semibold'>
                                    <a href='#'>Basic Tee</a>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='bg-white py-3 flex items-center justify-between border-t border-gray-200'>
                            <div className='flex-1 flex justify-between sm:hidden'>
                              <a
                                href='#'
                                className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
                              >
                                Previous
                              </a>
                              <a
                                href='#'
                                className='ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
                              >
                                Next
                              </a>
                            </div>
                            <div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between'>
                              <div>
                                <p className='text-sm text-gray-700'>
                                  Showing <span className='font-medium'>1</span> to{' '}
                                  <span className='font-medium'>10</span> of{' '}
                                  <span className='font-medium'>97</span> results
                                </p>
                              </div>
                              <div>
                                <nav
                                  className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
                                  aria-label='Pagination'
                                >
                                  <a
                                    href='#'
                                    className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
                                  >
                                    <span className='sr-only'>Previous</span>
                                    <svg
                                      className='h-5 w-5'
                                      xmlns='http://www.w3.org/2000/svg'
                                      viewBox='0 0 20 20'
                                      fill='currentColor'
                                      aria-hidden='true'
                                    >
                                      <path
                                        fillRule='evenodd'
                                        d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                                        clipRule='evenodd'
                                      />
                                    </svg>
                                  </a>
                                  <a
                                    href='#'
                                    aria-current='page'
                                    className='z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
                                  >
                                    1
                                  </a>
                                  <a
                                    href='#'
                                    className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
                                  >
                                    2
                                  </a>
                                  <a
                                    href='#'
                                    className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium'
                                  >
                                    3
                                  </a>
                                  <span className='relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700'>
                                    ...
                                  </span>
                                  <a
                                    href='#'
                                    className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium'
                                  >
                                    8
                                  </a>
                                  <a
                                    href='#'
                                    className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
                                  >
                                    9
                                  </a>
                                  <a
                                    href='#'
                                    className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
                                  >
                                    10
                                  </a>
                                  <a
                                    href='#'
                                    className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
                                  >
                                    <span className='sr-only'>Next</span>
                                    <svg
                                      className='h-5 w-5'
                                      xmlns='http://www.w3.org/2000/svg'
                                      viewBox='0 0 20 20'
                                      fill='currentColor'
                                      aria-hidden='true'
                                    >
                                      <path
                                        fillRule='evenodd'
                                        d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                                        clipRule='evenodd'
                                      />
                                    </svg>
                                  </a>
                                </nav>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </main>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null

export default Modal
