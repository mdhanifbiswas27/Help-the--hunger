import { Link } from 'react-router-dom';
import logo from '../../../assets/logo4.png'

const Navbar = () => {
    
    return (
        <div className='flex justify-between items-center bg-[#CBE8E9] py-6'>
            <Link to='/'>
            <div className='flex items-center'>
                <img className='w-[100px] h-[100px]  bg-[#CBE8E9]' src={logo} alt="" />
                <div className=''>
                 <h1 className='text-lg font-medium'>Zero <span className='text-[#45CB0B]'>Waste</span></h1>
                 < hr className='border-2 bg-[#45CB0B]'></hr>
                 <h1 className='text-lg font-medium ml-9'>Zero <span className='text-[#45CB0B]'>Hunger</span></h1>
                </div>
            </div>
            </Link>
            <div className=''>
                <ul className='flex gap-6 text-2xl font-semibold'>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/AvailableFoods'><li>Available Foods</li></Link>
                    <Link to='/AddFood'><li>Add Food</li></Link>
                    <Link to='/ManageMyFoods'><li>Manage My Foods</li></Link>
                    <Link to='/MyFoodRequest'><li>My Food Request</li></Link>
                    <Link to='/Login'><li className='bg-[#BB272E] text-white btn hover:text-black rounded-full'>Login</li></Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;