document.getElementById('translationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const anglisht_italisht= document.getElementById('anglisht_italisht').value;
    let perkthimi = '';
    let dialekt = '';

    // Shtoni disa përkthime të thjeshta (kjo mund të zgjerohet me më shumë fjalë)
    const dictionary = {
        'voice': { perkthimi: 'zëri', dialekt: 'za' },
        'voce': { perkthimi: 'zëri', dialekt: 'za' },
        'moon': { perkthimi: 'hëna', dialekt: 'hana' },
        'luna': { perkthimi: 'hëna', dialekt: 'hana' },
        'now': { perkthimi: 'tani', dialekt: 'ime' },
        'adesso': { perkthimi: 'tani', dialekt: 'ime' },
        'clothes': { perkthimi: 'rroba', dialekt: 'tesha' },
        'vestiti': { perkthimi: 'rroba', dialekt: 'tesha' },
        'slippers': { perkthimi: 'shapka', dialekt: 'tafte' },
        'pantofle': { perkthimi: 'shapka', dialekt: 'tafte' },
        'salt': { perkthimi: 'kripë', dialekt: 'kryp' },
        'sale': { perkthimi: 'kripë', dialekt: 'kryp' },
        'mother': { perkthimi: 'nënë', dialekt: 'nana' },
        'mamma': { perkthimi: 'nënë', dialekt: 'nana' },
        'father': { perkthimi: 'baba', dialekt: 'tate' },
        'padre': { perkthimi: 'baba', dialekt: 'tate' },
        'song': { perkthimi: 'këngë', dialekt: 'kang' },
        'canzone': { perkthimi: 'këngë', dialekt: 'kang' },
        'uncle': { perkthimi: 'xhaxha', dialekt: 'axha' },
        'zio': { perkthimi: 'xhaxha', dialekt: 'axha' },
        'breath': { perkthimi: 'frymë', dialekt: 'firoma' },
        'respiro': { perkthimi: 'frymë', dialekt: 'firoma' },
        'knife': { perkthimi: 'thika', dialekt: 'sika' },
        'coltello': { perkthimi: 'thika', dialekt: 'sika' },
        'leek': { perkthimi: 'presh', dialekt: 'purri' },
        'porro': { perkthimi: 'presh', dialekt: 'purri' },
        'pan': { perkthimi: 'tigan', dialekt: 'feltere' },
        'padella': { perkthimi: 'tigan', dialekt: 'feltere' },
        'tomato': { perkthimi: 'domate', dialekt: 'mollatarta' },
        'pomodoro': { perkthimi: 'domate', dialekt: 'mollatarta' },
        'potato': { perkthimi: 'patate', dialekt: 'kërtolla' },
        'patata': { perkthimi: 'patate', dialekt: 'kërtolla' },
        'sand': { perkthimi: 'rërë', dialekt: 'ran' },
        'sabbia': { perkthimi: 'rërë', dialekt: 'ran' },
        'pig': { perkthimi: 'derr', dialekt: 'thi' },
        'maiale': { perkthimi: 'derr', dialekt: 'thi' },
        'rope': { perkthimi: 'litar', dialekt: 'konop' },
        'corda': { perkthimi: 'litar', dialekt: 'konop' },
        'watermelon': { perkthimi: 'shalqi', dialekt: 'imonik' },
        'anguria': { perkthimi: 'shalqi', dialekt: 'imonik' },
        
        
        

        

        
    
   
 
      
      
      
      
      
    };

    // Kontrollojmë nëse fjala ekziston në fjalorin e dialektit
    if (dictionary[anglisht_italisht]) {
        perkthimi = dictionary[anglisht_italisht].perkthimi;
        dialekt = dictionary[anglisht_italisht].dialekt; 
    } else {
        perkthimi = 'Përkthimi nuk u gjet.';
        dialekt = 'Përkthimi nuk u gjet.';
    }

    // Shfaqim rezultatin
    document.getElementById('perkthimi').value = perkthimi;
    document.getElementById('dialekt').value = dialekt;

});
