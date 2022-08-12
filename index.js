const https = require('https');

    https.get('https://daringfireball.net/feeds/json',(res)=>{
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
          });
        
   
          res.on('end', () => {
            const resultData= JSON.parse(data);
          for(let i=0; i<2; i++){
            const item = resultData.items[i];
            console.log( 
              `title: ${item.title} \n`,
              `date_modified: ${item.date_modified} \n`,
              `authorName: ${item.authors[0].name} \n `,
              'content_html :', item.content_html ,'\n'
                 );
          }
        });
   
    
   });
