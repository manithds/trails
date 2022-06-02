function Avatar ({url, className }){
    return <img 
    
    loading="lazy"
    className={`h-9 rounded-full cursor-pointer trasition duration-150 transform hover:scale-110 ${className}`}
    src={url}
    alt="profile picture"

    />;
}

export default Avatar