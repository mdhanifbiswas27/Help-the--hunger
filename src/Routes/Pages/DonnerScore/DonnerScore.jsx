import { useEffect, useState } from "react";




const DonnerScore = () => {


    const [topDonner, setTopDonner] = useState([]);

    useEffect(() => {
        fetch('https://my-assignment-eleven-server-site-q0osxmnty.vercel.app/users')
            .then(res => res.json())
            .then(data => {

                const sortedUsers = data.sort((a, b) => b.donatePoint - a.donatePoint);
                setTopDonner(sortedUsers);
            })
            .catch(error => {
                console.error('Error fetching users:', error);

            });
    }, []);




    return (
        <div className="max-w-screen-xl mx-auto px-8">
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Score</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                topDonner.map(user => <tr key={user._id}>
                                   
                                   <td>
                                   <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user.Photo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                   </td>
                                    <td>
                                       
                                            <div className="avatar">
                                                
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.name}</div>
                                            </div>
                                        
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td>{user.donatePoint}</td>
                                    
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    );
};

export default DonnerScore;
