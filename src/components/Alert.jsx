import React from 'react'
import { useLocation } from 'react-router-dom'
import Swal from 'sweetalert2'
const Alert = ({title, message, icon, type}) => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  switch (type) {
    case 'toast':
      Toast.fire({
        icon: icon,
        title: message
      })
      break
    case 'modal':
      Swal.fire(
        {
            title: title,
            text: message,
            icon: icon,
            confirmButtonText: 'Ok'
        }
      )
      break
    default:
      break
  }
  return (
    <></>
  )
}

export default React.memo(Alert)