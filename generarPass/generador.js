function generadorPass() {
    const length = document.getElementById('length').value;
    let password = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';

    for (let i=0; i<length; i++){
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    document.getElementById('password').value = password;
}

function copy() {
    const pass = document.getElementById('password');
    pass.select();
    document.execCommand('copy');
    alert('El password se ha copiado!!!');
    
}