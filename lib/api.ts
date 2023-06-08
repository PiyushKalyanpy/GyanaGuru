export const sendEmail = async (email: string) => { 
    fetch("/api/mailer", {
        method:"POST",
        body: JSON.stringify({email}),
        headers:{
            "Content-type":"application/json",
        },
    }
    )}