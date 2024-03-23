document.querySelector('.kishorei').addEventListener('click',
    function() {
        
        let targetUrl = 'https://www.instagram.com/_._.kishorekumar._._?igsh=MWlmaGM2czh3NGZ6dw=='; 
        window.location.href = targetUrl;
})
;

document.querySelector('.yashi').addEventListener('click',
    function() {
        
        let targetUrl = 'https://www.instagram.com/thenameisyash?igsh=eGkxOGt3YndqazJ0'; 
        window.location.href = targetUrl;
})
;

document.querySelector('.dhonii').addEventListener('click',
    function() {
        
        let targetUrl = 'https://www.instagram.com/mahi7781?igsh=MTBsaHc0MndvZndrYw=='; 
        window.location.href = targetUrl;
})
;

document.querySelector('.virati').addEventListener('click',
    function() {
        
        let targetUrl = 'https://www.instagram.com/virat.kohli?igsh=ZGthNnQ1c3VvdHY4'; 
        window.location.href = targetUrl;
})
;

document.querySelector('.sub').addEventListener('click',
    function() {
        
        let targetUrl = 'https://youtu.be/cMLLrndp5_E?si=a5Vy2X38LwcARehB'; 
        window.location.href = targetUrl;
})
;

document.getElementById('bdown').addEventListener('click', function() {
    // Replace 'path/to/your/file.pdf' with the actual path to your PDF file
    const pdfUrl = 'D:\documents\KISHORE.DBMS.pdf';
    
    // Create an anchor element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank'; // Open in a new tab
    link.download = 'filename.pdf'; // Optional: Set the filename for download
    
    // Append the anchor element to the document body
    document.body.appendChild(link);
    
    // Trigger the click event of the anchor element
    link.click();
    
    // Clean up: Remove the anchor element from the document body
    document.body.removeChild(link);
});
