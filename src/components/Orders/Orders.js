import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

const Orders = ({ user, setUser }) => {

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      setUser(auth.currentUser);
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <>
      {user ?
        (
          <div className="max-w-screen-lg  h-screen mx-auto p-10">
            <h1 className="text-3xl border-b mb-2 pb-3 border-yellow-400">
              Your Orders
            </h1>

            <div className="mt-5 space-y-5">
              <h3 className="text-xl text-center">This page is coming soon!</h3>
            </div>
          </div>
        ) :
        (
          <div className="max-w-screen-lg mx-auto p-10">
            <h2 className="flex text-3xl border-b mb-2 pb-3 border-yellow-400">
              You must <p className="mx-3 text-gray-500 hover:underline cursor-pointer" onClick={handleSignIn}>login</p> to check orders
            </h2>
          </div>
        )
      }
    </>
  )
}

export default Orders;