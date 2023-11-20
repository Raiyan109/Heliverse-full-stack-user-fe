import axios from "axios";
import { useEffect, useRef } from "react";
import { useState } from "react";
import User from "./User";
import ReactPaginate from 'react-paginate';

const Users = () => {
    const [users, setUsers] = useState([])
    const [limit, setLimit] = useState(20)
    const [pageCount, setPageCount] = useState(1)
    const [inputValue, setInputValue] = useState('')
    const currentPage = useRef()

    const getUsers = async () => {
        const { data } = await axios.get('http://localhost:5000/api/user')

        setUsers(data)
    }

    const handlePageClick = async (e) => {
        console.log(e);
        getPaginatedUsers()
        currentPage.current = e.selected + 1
    }

    const getPaginatedUsers = async () => {
        const { data } = await axios.get(`http://localhost:5000/api/user/paginated?page=${currentPage.current}&limit=${limit}`)
        console.log(data);
        setPageCount(data.pageCount)
        setUsers(data.result)
    }

    useEffect(() => {
        currentPage.current = 1
        // getUsers()
        getPaginatedUsers()
    }, [])

    return (
        <div className="">
            <h1 className="text-center text-5xl py-8 font-semibold">Users</h1>

            <div className="flex justify-center items-center py-4">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
                            <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 text-gray-800">
                                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                            </svg>
                        </button>
                    </span>
                    <input
                        onChange={(e) => setInputValue(e.target.value)}
                        type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-100 text-gray-800 focus:bg-gray-50" />
                </div>
            </div>
            <div className="mx-auto flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32">
                    {
                        users
                            .filter((user) => {
                                if (inputValue === '') {
                                    return user;
                                }
                                else if (user?.firstName?.toLowerCase()?.includes(inputValue?.toLowerCase())) {
                                    return user;
                                }
                            })
                            .map((user) => (
                                <User key={user._id} user={user} />
                            ))
                    }
                </div>
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                marginPagesDisplayed={2}
                containerClassName="flex justify-center items-center gap-5 border-2"
                pageClassName="page-item border-2 py-1 px-3 cursor-pointer"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                activeClassName="active bg-yellow-500 border-blue-200 "

            />
        </div>
    );
};

export default Users;