import axios from "axios";
import { useEffect, useRef } from "react";
import { useState } from "react";
import User from "./User";
import ReactPaginate from 'react-paginate';

const Users = () => {
    const [users, setUsers] = useState([])
    const [limit, setLimit] = useState(20)
    const [pageCount, setPageCount] = useState(1)
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

            <div className="mx-auto flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32">
                    {
                        users.map((user) => (
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