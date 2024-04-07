import React from 'react';
const AddressMap = () => {
  return (
    <div className='google-map-code'>
      <iframe
        title='Google map'
        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7497.928265831459!2d73.763904!3d20.01002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb9a74a4d195%3A0xf79f196f4e460527!2sJagdish%20Sankul!5e0!3m2!1sen!2sin!4v1712512040961!5m2!1sen!2sin'
        width='100%'
        height='450'
        frameborder='0'
        style={{ border: 0 }}
        allowfullscreen=''
        aria-hidden='false'
        tabindex='0'
      />
    </div>
  );
};
export default AddressMap;
