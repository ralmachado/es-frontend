const QRead = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center h-screen w-full justify-center">
      <h3 className="text-gray-800 text-2xl font-bold sm:text-3x mb-2">Read the QR</h3>
      <div className="border-2 border-black h-96 w-96"></div>
      <button className="px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150 w-64 mt-10">Advance</button> 
    </div>
  )
}

export default QRead
