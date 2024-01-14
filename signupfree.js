function createWarrantyPage(){   

    let element;
    let label;

    element = document.createElement('h3');
    element.innerHTML = '<h3>SIGN UP<h3>'
    document.body.appendChild(element);   

    element = document.createElement('h2');
    element.innerHTML = 'Give Your Details'
    document.body.appendChild(element);  
    
    // <label for="">Upload Profile Photo</label> 
    // <input type="file" name="" id="">
    label = document.createElement('label');
    label.innerHTML = "Upload Profile Photo"
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", "file")
    element.innerHTML = 'Upload Profile Photo'
    document.body.appendChild(element); 
    br = document.createElement('br');
    document.body.appendChild(br);  


    label = document.createElement('label');
    label.innerHTML = "First Name"
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", "text")    
    document.body.appendChild(element);   
    br = document.createElement('br');
    document.body.appendChild(br); 

    label = document.createElement('label');
    label.innerHTML = "Last Name"
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", "text")
    element.innerHTML = 'Last Name'
    document.body.appendChild(element);
    br = document.createElement('br');
   document.body.appendChild(br);
   

    label = document.createElement('label');
    label.innerHTML = "Email"
    document.body.appendChild(label);    
    element = document.createElement('input');
    element.setAttribute("type", "email")
    element.innerHTML = 'Email'
    document.body.appendChild(element);
    br = document.createElement('br');
    document.body.appendChild(br);


    label = document.createElement('label');
    label.innerHTML = "Phone Number"
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", "number")
    element.innerHTML = 'Phone Number'
    document.body.appendChild(element);
    br = document.createElement('br');
    document.body.appendChild(br);


    label = document.createElement('label');
    label.innerHTML = "Address"
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", "text")
    element.innerHTML = 'Address'
    document.body.appendChild(element);
    br = document.createElement('br');
    document.body.appendChild(br);
    
    
    label = document.createElement('label');
    label.innerHTML = "Previous Projects"
    document.body.appendChild(label);
    br = document.createElement('br');
    document.body.appendChild(br);
    element = document.createElement('textarea');
    document.body.appendChild(element);
    br = document.createElement('br');
    document.body.appendChild(br);


    label = document.createElement('label');
    label.innerHTML = "Project Role"
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", "text")
    element.innerHTML = 'Project Role'
    document.body.appendChild(element);
    br = document.createElement('br');
    document.body.appendChild(br);


    label = document.createElement('label');
    label.innerHTML = "Preferred Projects Types"
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", "text")
    element.innerHTML = 'Preferred Projects Types'
    document.body.appendChild(element);
    br = document.createElement('br');
    document.body.appendChild(br);


    label = document.createElement('label');
    label.innerHTML = "Rate and Payment"
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", "text")
    element.innerHTML = 'Rate and Payment'
    document.body.appendChild(element);
    br = document.createElement('br');
    document.body.appendChild(br);


    label = document.createElement('label');
    label.innerHTML = "Social Media Links"
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", "text")
    element.innerHTML = 'Social Media Links'
    document.body.appendChild(element); 
    br = document.createElement('br');
    document.body.appendChild(br);  
    

    element = document.createElement('input');
    element.setAttribute("type", "button")
    element.setAttribute("value", "Save")    
    document.body.appendChild(element);    
   

    element = document.createElement('input');
    element.setAttribute("type", "button")
    element.setAttribute("value", "Close")    
    document.body.appendChild(element); 

}  