import React from 'react'
import NewPostModal from './NewPostModal'
import Post from './Post'

function Feed({show, setShow}) {
  return (
    <div className='flex flex-col items-center max-w-50'>
        <NewPostModal show={show} setShow={setShow} />
        <Post user='LukeBWood' likes={0} picture="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"/>
        <Post user='LukeBWood' likes={54} picture="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"/>
        <Post user='LukeBWood' likes={56} picture="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"/>
        <Post user='LukeBWood' likes={12} picture="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"/>
    </div>
    //feed will have post components rendered when requested from the back end


  )
}

export default Feed