import React from 'react'
const cyear = new Date().getFullYear()
const Footer =() =>{
    return(
        <>
        <footer className='text-center'>
            <p>@{cyear} RippleStacks. All Right Reserved | Terms and conditions </p>
        </footer>
        </>
    )
}
export default Footer