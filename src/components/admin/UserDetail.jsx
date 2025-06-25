import React, { useContext } from "react";
import myContext from "../../context/myContext";

function UserDetail() {
  const context = useContext(myContext);
  const { getAllUser, deleteUser } = context;

  return (
    <div>
      <div>
        <div className="py-5">
          <h1 className="text-xl text-pink-300 font-bold">All User</h1>
        </div>

        <div className="w-full overflow-auto">
          <table className="w-full text-left border border-collapse sm:border-separate border-pink-100 text-pink-400">
            <thead>
              <tr>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                  S/N
                </th>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                  Name
                </th>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                  Email
                </th>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                  User ID
                </th>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                  Role
                </th>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                  Date
                </th>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {getAllUser.map((item, index) => {
                return (
                  <>
                    <tr key={index} className="text-pink-300">
                      <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                        {index + 1}
                      </td>
                      <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                        {item.name}
                      </td>
                      <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500">
                        {item.email}
                      </td>
                      <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500">
                        {item.id.slice(0, 10)}
                      </td>
                      <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                        {item.role}
                      </td>
                      <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                        {item.date}
                      </td>
                      <td className="h-12 px-6 transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 flex gap-5 items-center">
                        {/* <span className="text-green-600 cursor-pointer text-lg">
                          <i className="fa fa-edit"></i>
                        </span> */}
                        <span
                          onClick={() => deleteUser(item.id)}
                          className="text-red-600 cursor-pointer text-lg"
                        >
                          <i className="fa fa-trash"></i>
                        </span>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
