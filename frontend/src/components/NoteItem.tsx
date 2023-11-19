import { FC } from 'react';
import AppButton from './AppButton';

//One way of doing this
// const NoteItem = (props:{ title : string}) => {
//     return (
//         <div className="space-y-5 border-b-2 shadow-md p-5 my-5">
//             <p className="font-semibold pb-4">{props.title}</p>
//             {/* <p className="font-normal pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate itaque nesciunt corrupti eaque.</p> */}
//             <div className="text-right space-x-3">
//                 <button className="bg-blue-500 text-white font-semibold p-2 rounded-md">View</button>
//                 <button className="bg-gray-500 text-white font-semibold p-2 rounded-md">Edit</button>
//                 <button className="bg-red-500 text-white font-semibold p-2 rounded-md">Delete</button>
//             </div>
//         </div>)
// } 

//another way of doing this 
// const NoteItem: FC<{ title : string}> = (props) => {
//     return (
//         <div className="space-y-5 border-b-2 shadow-md p-5 my-5">
//             <p className="font-semibold pb-4">{props.title}</p>
//             {/* <p className="font-normal pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate itaque nesciunt corrupti eaque.</p> */}
//             <div className="text-right space-x-3">
//                 <button className="bg-blue-500 text-white font-semibold p-2 rounded-md">View</button>
//                 <button className="bg-gray-500 text-white font-semibold p-2 rounded-md">Edit</button>
//                 <button className="bg-red-500 text-white font-semibold p-2 rounded-md">Delete</button>
//             </div>
//         </div>)
// } 

//maybe the best way of doing this 

interface Props {
    title?: string;
    description?: string;
    onEditClick?(): void;
    onDeleteClick?(): void;
    onViewClick?(): void;
};

const NoteItem: FC<Props> = ({title,description, onEditClick, onDeleteClick, onViewClick}) => {
    return (
        <div className="space-y-5 border-b-2 shadow-md p-5 my-5">
            <p className="font-semibold pb-4">{title}</p>
            {description ? <p className='ml-2 py-2 text-lg'>{description}</p> : null }
            {/* <p className="font-normal pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate itaque nesciunt corrupti eaque.</p> */}
            <div className="text-right space-x-3">
                <AppButton name={description? "Hide" : "View"} type="regular" onClick={onViewClick}/>
                <AppButton name="Edit" onClick={onEditClick} type="normal"/>
                <AppButton name="Delete" type="danger" onClick={onDeleteClick}/>
            </div>
        </div>)
};

export default NoteItem;