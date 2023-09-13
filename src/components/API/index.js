export const AddToCart = (id)=>{
    return fetch('http://localhost:5000/courses', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
      .then(res => res.json())
}