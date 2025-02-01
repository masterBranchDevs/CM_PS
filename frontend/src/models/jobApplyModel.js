// import React, { useState } from "react";

// const UserFormModal = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         qualification: "",
//         experience: "",
//         other: "",
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert(`Form Submitted:\n${JSON.stringify(formData, null, 2)}`);
//         setFormData({ name: "", qualification: "", experience: "", other: "" });
//     };

//     return (
//         <>
//             {/* Bootstrap Modal */}
//             <div
//                 className="modal fade show"
//                 id="userModal"
//                 tabIndex="-1"
//                 aria-labelledby="userModalLabel"
//                 aria-hidden="true"
//                 style={{
//                     display: "none", // Prevent Bootstrap from hiding it unexpectedly
//                     zIndex: 1055, // Ensure modal is on top
//                 }}
//             >
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="userModalLabel">
//                                 User Information
//                             </h5>
//                             <button
//                                 type="button"
//                                 className="btn-close"
//                                 data-bs-dismiss="modal"
//                                 aria-label="Close"
//                             ></button>
//                         </div>
//                         <div className="modal-body">
//                             <form onSubmit={handleSubmit}>
//                                 <div className="mb-3">
//                                     <label className="form-label">Name</label>
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         name="name"
//                                         value={formData.name}
//                                         onChange={handleChange}
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label className="form-label">Qualification</label>
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         name="qualification"
//                                         value={formData.qualification}
//                                         onChange={handleChange}
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label className="form-label">Experience (Years)</label>
//                                     <input
//                                         type="number"
//                                         className="form-control"
//                                         name="experience"
//                                         value={formData.experience}
//                                         onChange={handleChange}
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label className="form-label">Other</label>
//                                     <textarea
//                                         className="form-control"
//                                         name="other"
//                                         rows="3"
//                                         value={formData.other}
//                                         onChange={handleChange}
//                                     ></textarea>
//                                 </div>
//                                 <button type="submit" className="btn btn-success">
//                                     Submit
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default UserFormModal;
