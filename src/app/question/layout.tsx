import React from "react";

const QuestionLayout = ({children,}: { children: React.ReactNode })=>{
  return(
    <>
      <div className={"w-96 sm:w-full divide-y divide-gray-300"}>
        <div className="navbar justify-around bg-base-100">
          <div className="flex">
            <a className="btn btn-ghost normal-case text-xl">建码</a>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="/next.svg" />
                </div>
              </label>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={"flex flex-row justify-center"}>
          <div className={"hidden bg-red-50 sm:flex sm:w-60 "}>
            <ul className="menu w-full bg-base-200 rounded-box">
              <li><a className={"active"} href={"/question"}>问题</a></li>
              <li><a>Item 2</a></li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <div className={"w-full max-w-2xl min-w-sm"}>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
export default QuestionLayout;