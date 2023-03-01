import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import csrfFetch from '../../../store/csrf';
import './createpin.css'

const CreatePinPage=()=>{
    const dispatch=useDispatch();
    const sessionUser = useSelector((state) => state.session.user)

    const [title,setTitle] = useState('');
    const [body, setBody] = useState('');
    const [alttext, setAlttext] = useState('');
    const [deslink, setDeslink] = useState('');

    const handleFile=(e)=>{

    }

return(
    
    <div className='pagebg'>
            <form className='formbox'>
                <table>
                    <tr>
                        <td>
                             <div className='icons'><button className="bellButton"><i class="fa-solid fa-ellipsis"></i></button></div>
                        </td>
                        <td className='redbut'>
                        <input className="saveButton" type="submit" value="Save" />
                        </td>

                    </tr>
                    <tr>
                        <td className='left'>
                            <div className='dotline'></div>
                        <img className="Uploadpic" src="" alt="" />
                        <input
                            className='uploadButton'
                            type="file"
                            onChange={handleFile}>
                        </input>

                        <p><i className="fa-solid fa-circle-up"></i></p>
                        <p className='uploadins'>Drag and drop or click to upload</p>
                        <p className='recommend'>We recommend using high-quality .jpg files under 20MB</p>
                        </td>


                        <td className='right'>

                        
                        <input className="titleInput" type="text"
                            value={title}
                            placeholder="Add your title"
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        ></input>
                        <br />
                        <br />
                        <div>
                            {sessionUser.imgurl ? <img className="pfpPic" src={sessionUser.imgurl} alt="" /> : <div className="Nopic">{sessionUser.username[0]}</div>}
                            
                            {" "+sessionUser.username}
                        </div>
                        <br />
                        <br />
                        <input className="bodyInput" type="text"
                            value={body}
                            placeholder="   Tell everyone what your Pin is about"
                            onChange={(e) => setBody(e.target.value)}

                        ></input>
                        <br />
                        <input className="alttextInput" type="text"
                            value={alttext}
                            placeholder="Explain what people can see in the Pin"
                            onChange={(e) => setAlttext(e.target.value)}
                            

                        ></input>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <input className="deslinkInput" type="text"
                            value={deslink}
                            placeholder="Add destination link"
                        onChange={(e) => setDeslink(e.target.value)}
                            
                        ></input>
                        </td>
                    </tr>
                </table>

            </form>

    </div>
            

);
}

export default CreatePinPage;