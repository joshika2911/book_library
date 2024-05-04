import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
// import Loading from "../Loader/Loader";
// import Book from "../BookList/Book";
import coverImg from "../images/cover_not_found.jpg";
import "./BookDetails.css";
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const URL = "https://openlibrary.org/static/build/page-user.css?v=3b14316dd21f926b49b178c61eacb185";
const BookDetails = ()=>{
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [Book, setBook] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        async function getBookDetails(){
            try{
              const response = await fetch(`${URL}${id}.json`);
              const data = await response.json();
              console.log(data);

              if(data){
                const {description, title, covers, subject_places, subject_times, subjects} = data;
                const newBook = {
                    description: description ? description.value : "No description found",
                    title: title,
                    cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`: coverImg,
                    subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
                    subject_times : subject_times ? subject_times.join(", ") : "No subject times found",
                    subjects: subjects ? subject_places.join(", ") : "No subjects found"
                };
                setBook(newBook);
              }else{
                setBook(null);
              }
              setLoading(false);
            } catch(error){
                console.log(error);
                setLoading(false);
            }
        }
        getBookDetails();
    }, [id]);

    if(loading) return <loading />
    
    return(
        <section className='book-details'>
            <div className='container'>
                <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/book")}>
                    <FaArrowLeft size = {22} />
                    <span className='fs-18 fw-6'>Go Back</span>
                </button>

                <div className='book-details-content grid'>
                    <div className='book-details-img'>
                        <img src = {Book?.cover_img} alt = "cover img" />
                    </div>
                    <div className='book-details-info'>
                        <div className='book-details-item title'>
                            <span className='fw-6 fs-24'>{Book?.title}</span>
                        </div>
                        <div className='book-details-item description'>
                            <span>{Book?.description}</span>
                        </div>
                        <div className='book-details-item'>
                            <span className='fw-6'>Subject Places: </span>
                            <span className='text-italic'>{Book?.subject_places}</span>
                        </div>
                        <div className='book-details-item'>
                            <span className='fw-6'>Subject Times: </span>
                            <span className='text-italic'>{Book?.subject_times}</span>
                        </div>
                        <div className='book-details-item'>
                            <span className='fw-6'>Subjects: </span>
                            <span>{Book?.subjects}</span>
                        </div>
                    </div>
                </div>
            </div>    
        </section>
    )
}

export default BookDetails