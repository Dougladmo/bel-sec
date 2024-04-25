import React from 'react'

const ReportForm = () => {

    const handleOnSubmit = (e) => {
        e.preventDefault();
    
        const tipo = e.target.type.value;
        const description = e.target.description.value;
        const address = e.target.local.value;
        const imageFile = e.target.image.files[0]; // Obtém o arquivo de imagem do campo de entrada
    
        const formData = new FormData(); // Cria um objeto FormData
    
        formData.append('tipo', tipo);
        formData.append('description', description);
        formData.append('address', address);
        formData.append('image', imageFile); // Adiciona o arquivo de imagem ao FormData
    
        fetch('http://localhost:8000/Reports/', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                alert('Report Added');
            } else {
                throw new Error('Failed to add report');
            }
        })
        .catch(error => console.error('Error:', error));
    };

    return (
        <form onSubmit={handleOnSubmit} className='flex flex-col gap-5 px-5 md:items-center'>
            <div className='type'>
                <p className='mb-2 text-3xl text-white md:text-center'>What Happened?</p>
                <label className='ml-2 text-xl text-white'>
                    <input required className='mr-2' type="radio" name="type" id="accident" value='Accident' />
                    Accident
                </label>
                <label className='ml-2 text-xl text-white'>
                    <input required className='mr-2' type="radio" name="type" id="assault" value='Assault' />
                    Assault
                </label>
                <label className='ml-2 text-xl text-white'>
                    <input required className='mr-2' type="radio" name="type" id="flooding" value='Flooding' />
                    Flooding
                </label>
            </div>
            <label className='text-2xl text-white'>Report what happened briefly:</label>
            <input required type="text" name='description' id='description' className='w-1/3 h-10 text-base rounded-lg indent-3' />
            <label className='text-2xl text-white'>Report the location it ocurred:</label>
            <input required type="text" name='local' id='local' className='w-1/3 h-10 px-2 text-xl rounded-lg' />
            <label className='text-2xl text-white'>The Image of what ocurred:</label>
            <input required type="file" name='image' id='image' className='w-auto py-2 pl-2 text-xl text-center bg-white rounded-lg' />
            <button type='submit' className='self-center px-5 py-2 mb-5 text-2xl text-black uppercase transition duration-300 bg-white rounded-xl hover:text-white hover:bg-[#1E1E1E] border-4 border-white'> send report </button>
        </form>
    )
}

export default ReportForm