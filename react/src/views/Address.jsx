import React, { useContext, useEffect, useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import axiosClient from '../axios-client';
import { newContext } from '../contexts/ContextProvider';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

function Address() {
    const {user,setBanner} = useContext(newContext);
    useEffect(() => {
        setBanner(false)
    }, [])

    const [address, setAddress] = useState([])
    const [display, setDisplay] = useState(true)
    const [displayForm, setDisplayForm] = useState(true)
    const [hideBtn, setHideBtn] = useState(true)
    const nav = useNavigate();
    const userName = user.first_name;
    const id = user.user_id;
    // const [removeAddress, setAddress] = useState(true)
    // const [removeAddressOld, setAddressOld] = useState(true)

    const addAddress =()=>setDisplay(false)
    const handleShow =()=>{
        setDisplayForm(false)
        setHideBtn(false)
    }

    const handleRemoveAddress =()=>setDisplay(true)
    const handleRemoveAddressOld =()=>{
        setDisplayForm(true)
        setHideBtn(true)
    }

    const addressRef1 = useRef();
    const addressRef2 = useRef();
    const addressRef3 = useRef();
    const addressRef4 = useRef();
    const addressRef5 = useRef();
    const addressRef6 = useRef();
    const addressRef7 = useRef();
    const addressRef8 = useRef();
    const addressRef9 = useRef();

    const onSubmit=(e)=>{
        e.preventDefault();
        const payload = {
                address1:addressRef1.current.value,
                address2:addressRef2.current.value,
                address3:addressRef3.current.value,
                address4:addressRef4.current.value,
                address5:addressRef5.current.value,
                address6:addressRef6.current.value,
                address7:addressRef7.current.value,
                address8:addressRef8.current.value,
                address9:addressRef9.current.value,
        }

        // console.log(payload)
        axiosClient.post(`/address/${id}`,payload).then(({data})=>{
            setAddress(data.address)
            }).catch(err=>{
                const response = err.response;
                if(response && response.status == 422){
                    console.log(response.data.errors);
                }
            }
        )
        nav('/thankyou')
    }

    const handleBack = ()=>{
        nav('/Address-check')
    }


  return (
    <>
    <Header />
    <Content user={userName}/>
        <div className="offset-lg-2 col-lg-8 offset-md-1 col-md-10 col-12 text-center">
            <div className="formpart">
                <Form onSubmit={onSubmit}>
                    <div id="slide04">
                    <h3>Enter your Previous Address</h3>
                    <div className='text-start'>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Previous Address 1</Form.Label>
                                <Form.Control type="text" placeholder="Address line 1" className='mb-3' ref={addressRef1}/>
                                <Form.Control type="text" placeholder="Address line 2" className='mb-3' ref={addressRef2}/>
                                <Form.Control type="text" placeholder="Address line 3" className='mb-3' ref={addressRef3}/>
                            </Form.Group></div>

                            <div className={display ? "show" : "hide"} id="submitoradd01" >
                                <Button type="submit" className="btn btn-success tothank">Submit</Button>
                                <p ><a className='decoration' onClick={addAddress}>Add Another Address</a></p>
                                <p><a className='decoration' onClick={handleBack}>&lt;&lt; Back</a></p>
                        </div>

                        <div id="postaddrs2" className={display ? "hide" : "show"}>
                            <div className='text-start'>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label id="pre">Previous Address 2</Form.Label>
                                <Form.Control type="text" placeholder="Address line 1" className='mb-3' ref={addressRef4}/>
                                <Form.Control type="text" placeholder="Address line 2" className='mb-3' ref={addressRef5} />
                                <Form.Control type="text" placeholder="Address line 3" className='mb-3' ref={addressRef6} />
                            </Form.Group></div>

                            <div  id="submitoradd02" className={ hideBtn ? "show" : "hide"}>
                                <button type="submit" className="btn btn-success tothank">Submit</button>
                                <p><a className='decoration' onClick={handleShow}>Add Another Address</a></p>
                                <p><a className='decoration' onClick={handleRemoveAddress}>Remove Address</a></p>
                            </div>
                        </div>

                        <div id="postaddrs2" className={displayForm ? "hide-post" : "show-post"}>
                            <div className='text-start'>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='label'>Previous Address 3</Form.Label>
                                    <Form.Control type="text" placeholder="Address line 1" className='mb-3' ref={addressRef7}/>
                                    <Form.Control type="text" placeholder="Address line 2" className='mb-3' ref={addressRef8}/>
                                    <Form.Control type="text" placeholder="Address line 3"  className='mb-3' ref={addressRef9}/>
                                </Form.Group></div>

                            <div className="mb-3 text-center" id="submitoradd02" >
                                <button type="submit" className="btn btn-success tothank">Submit</button>
                                <p><a className='decoration' onClick={handleRemoveAddressOld}>Remove Address</a></p>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
<Footer />
    </>
  )
}

export default Address
