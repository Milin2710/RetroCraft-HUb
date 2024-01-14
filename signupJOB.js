function createWarrantyPage(){   

    let element;
    let label;

    element = document.createElement('h3');
    element.innerHTML = '<h3>SIGN UP<h3>'
    document.body.appendChild(element);   

    element = document.createElement('h2');
    element.innerHTML = 'Give Your Details'
    document.body.appendChild(element);  
    

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
    label.innerHTML = "Brief Project Description"
    document.body.appendChild(label);
    br = document.createElement('br');
    document.body.appendChild(br);
    element = document.createElement('textarea');
    document.body.appendChild(element);
    br = document.createElement('br');
    document.body.appendChild(br);


    label = document.createElement('label');
    label.innerHTML = "Roles to Fill"
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", "text")
    element.innerHTML = 'Roles to Fill'
    document.body.appendChild(element);
    br = document.createElement('br');
    document.body.appendChild(br);


    label = document.createElement('label');
    label.innerHTML = "Project Budegt"
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", "text")
    element.innerHTML = 'Project Budegt'
    document.body.appendChild(element);
    br = document.createElement('br');
    document.body.appendChild(br);


    label = document.createElement('label');
    label.innerHTML = "Project Location"
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", "text")
    element.innerHTML = 'Project Location'
    document.body.appendChild(element);
    br = document.createElement('br');
    document.body.appendChild(br);


    label = document.createElement('label');
    label.innerHTML = "Deadline for Application"
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", "text")
    element.innerHTML = 'Deadline for Application'
    document.body.appendChild(element); 
    br = document.createElement('br');
    document.body.appendChild(br);

    
    label = document.createElement('label');
    label.innerHTML = "Preferred Skills"
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", "text")
    element.innerHTML = 'Preferred Skills'
    document.body.appendChild(element); 
    br = document.createElement('br');
    document.body.appendChild(br);


    label = document.createElement('label');
    label.innerHTML = "Level Of Experience"
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", "text")
    element.innerHTML = 'Level Of Experience'
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