import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const SplitLayout = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 5; // Number of jobs per page
    const jobs = [
        { title: 'Data Entries', positions: 3 },
        { title: 'Welder', positions: 5 },
        { title: 'Electrician', positions: 2 },
        { title: 'Fitter', positions: 4 },
        { title: 'Rigger', positions: 3 },
        { title: 'Plumber', positions: 6 },
        { title: 'Mechanic', positions: 7 },
        { title: 'Carpenter', positions: 2 },
        { title: 'Driver', positions: 8 },
        { title: 'Painter', positions: 3 },
        { title: 'Plumber', positions: 6 },
        { title: 'Mechanic', positions: 7 },
        { title: 'Carpenter', positions: 2 },
        { title: 'Driver', positions: 8 },
        { title: 'Painter', positions: 3 },
    ];

    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="flex flex-col lg:flex-row w-full pt-2 gap-3 " style={{ height: '31rem' }}>
            {/* Left Section */}
            <div
                className="text-white flex h-1/2 lg:h-full w-full lg:w-1/2 p-2 shadow"
                style={{ 
                    borderRadius: '10px',
                    backgroundColor: '#2c3e50',
                }}
            >
                <div className="w-full">
                    <h2 className="text-4xl mb-3">Recent Openings</h2>
                    <table className="table table-striped w-full">
                        <thead className=''>
                            <tr className='text-white'>
                                <th>Job Title</th>
                                <th>Open Positions</th>
                                <th>Apply</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentJobs.map((job, index) => (
                                <tr key={index} className='text-white'>
                                    <td>{job.title}</td>
                                    <td>{job.positions}</td>
                                    <td>
                                        <button className="btn btn-primary">
                                            <a href="" className="text-white">Apply</a>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination */}
                    <nav>
                        <ul className="pagination justify-content-center">
                            {Array.from({ length: Math.ceil(jobs.length / jobsPerPage) }, (_, index) => (
                                <li
                                    key={index + 1}
                                    className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                                >
                                    <button className="page-link" onClick={() => paginate(index + 1)}>
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Right Section */}
            <div
                className="bg-gray-100 flex flex-col items-center justify-center h-1/2 lg:h-full w-full lg:w-1/2 p-2 shadow"
                style={{ borderRadius: '10px' }}
            >
                <div className="text-center">
                    <h2 className="text-2xl font-bold">Share your CV with us!</h2>
                    <p className="text-gray-700 my-2">
                        We will get back to you soon.
                    </p>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-orange-600">
                        <a href="https://api.whatsapp.com/send?phone=918511276458&text=Hi there !" target="_blank" className="hover:text-white">
                            Send Your CV
                        </a>
                    </button>
                    <p className="text-sm text-gray-500 mt-2">
                        Apply for hundreds of jobs across Surat.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SplitLayout;
