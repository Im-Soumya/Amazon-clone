

const Orders = ({ user }) => {
  return (
    <>
      {user ?
        (
          <div className="max-w-screen-lg mx-auto p-10">
            <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
              Your Orders
            </h1>
          </div>
        ) :
        (
          <div>
            <h2>You must login to check orders</h2>
          </div>
        )
      }
    </>
  )
}

export default Orders;