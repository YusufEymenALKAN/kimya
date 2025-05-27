const equipmentData = [
    {
        title: "BEHER",
        description: [
            "Silindirik, düz tabanlı borosilikat camdan yapılmış kaplar olup, üst kısmında bir kenar ve bir dökme ucu bulunmaktadır.",
            "Dökme ucu, çözümlerin düzgün bir şekilde dökülmesine yardımcı olur ve üst kısmında kapak bulunmaz.",
            "Çözümlerinin üzerini kapatmak için genellikle izleme camları kullanılır.",
            "Farklı boyutlarda gelirler ve maddeleri tutmak, ısıtmak veya karıştırmak için uygun ölçülerle kullanılırlar.",
            "Derecelendirilmiş kalibrasyonlara sahiptirler; ancak çözümlerin hassas hesaplamaları için tasarlanmamıştır, bu nedenle diğer aparatlara ihtiyaç duyulabilir."
        ],
        imgSrc: "imgs/beaker.jpeg"
    },
    {
        title: "ERLENMAYER",
        description: [
            "Erlenmeyer şişesi, konik şişe veya titrasyon şişesi olarak da bilinir.",
            "Kolay karıştırma için tasarlanmıştır; elle çalkalanarak dökülmeden karıştırılabilir.",
            "Ölçüm için kullanılmaz; yalnızca %5 doğrulukla ölçüm yaparlar.",
            "Genellikle titrasyonlar için kullanılır.",
            "Bu şişenin eğimli kenarları ve dar boynu, içindeki maddelerin çalkalanarak karıştırılmasına olanak tanır; bu da titrasyonlar için uygundur.",
            "Düz tabanı, ısıtma mekanizması veya aparatı üzerinde yerleştirilebilir."
        ],
        imgSrc: "imgs/ERLENMEYER_FLASK.jpeg"
    },
    {
        title: "TEST TÜPÜ",
        description: [
            "Küçük örnekleri tutmak ve karıştırmak için kullanılır.",
            "İki parmakla altına vurularak karıştırılır.",
            "Hem santrifüj hem de test tüpü rafına sığar.",
            "Genellikle nitel analizde kullanılır.",
            "Genellikle camdan yapılır; çünkü ısıya karşı görece dayanıklıdır."
        ],
        imgSrc: "imgs/TEST_TUBE.jpeg"
    },
    {
        title: "HACİM ÖLÇER",
        description: [
            "Belirli bir hacmi ölçmek için tasarlanmıştır; bu hacim, boyun üzerindeki çizgi ile belirtilmiştir.",
            "Hassas seyreltmeler ve standart çözümlerin hazırlanması için kullanılır.",
            "Çözümleri karıştırmak kolaydır; çünkü cam tıpa ile kapatılabilir ve karıştırmak için birkaç kez ters çevrilmek üzere tasarlanmıştır.",
            "Cam tıpanın gerekli boyutu şişede belirtilmiştir. Ters çevirirken cam tıpayı tutmaya dikkat edin.",
            "Çizgi üzerindeki menisküs seviyesinin üzerine doldurmamaya dikkat edin."
        ],
        imgSrc: "imgs/VOLUMETRIC_FLASK.jpg"
    },
    {
        title: "PİPET",
        description: [
            "Pipet, belirli bir hacimde sıvıyı pipete çekip sonra başka bir kabın içine aktarmayı içerir; bu işlem pipetin salma mekanizması veya üfleme ile yapılabilir.",
            "Küçük hacimlerde sıvıları doğru bir şekilde ölçmek ve aktarmak için kullanılır.",
            "Sıvıları aktarmak için dar bir ucu olan silindirik cam veya plastik bir tüptür ve sıvıyı çekmek için bir ampul veya başka bir mekanizma içerir.",
            "Seri seyreltmeler yapmak, örnekleri ölçmek/dağıtmak ve seyreltik çözümler hazırlamak için kullanılır."
        ],
        imgSrc: "imgs/PIPET.jpeg"
    },
    {
        title: "BÜRET",
        description: [
            "Hassas titrasyonlar veya çok küçük miktarlarda sıvı dağıtımı için kullanılır.",
            "Sıvının salınımını kontrol etmek için bir stopkok içerir.",
            "Beyaz plastik stopkok, aletle paralel olduğunda açıktır ve dik olduğunda kapalıdır.",
            "Kullanılmadığında ters çevrilerek açık şekilde saklanmalıdır."
        ],
        imgSrc: "imgs/buret.jpeg"
    },
    {
        title: "DESTEK STANDI",
        description: [
            "Halka standları, deneysel prosedür sırasında cam eşyaları yerinde tutmak için kullanılır.",
            "Halka kelepçeleri, çok yönlü kelepçeler veya 3-prong kelepçeler eklenebilir (sonuncusu kelepçe tutucuları gerektirir).",
            "Halkanın standı, Bunsen brülörü veya diğer ısı kaynakları üzerinde kapları destekleyen tel ağ veya seramik merkez tutabilir.",
            "Buretler, şişeler, beyerler ve test tüpleri gibi farklı ekipmanların çeşitli yüksekliklerde ve pozisyonlarda esnek düzenlenmesine olanak tanır."
        ],
        imgSrc: "imgs/Ringstand.jpg"
    },
    {
        title: "BÜRET KELEPÇESİ",
        description: [
            "Test tüplerini, buretleri ve diğer cam eşyaları deneyler sırasında yerinde tutmak için kullanılır; özellikle titrasyon gibi deneylerde hassas konumlandırma sağlar.",
            "Bureti dikey konumda tutarak sıvının doğru ölçümü ve düzenli akışını sağlamak için kritik öneme sahiptir.",
            "Titrasyon deneylerinde özellikle önemlidir; burada hassas ölçüm ve kontrollü sıvı akışı kritik öneme sahiptir.",
            "Buret kelepçelerinin kullanımı, deneylerin doğru bir şekilde tekrarlanmasını sağlar ve sonuçların tutarlılığını korur."
        ],
        imgSrc: "imgs/Burette_Clamp.jpg"
    },
    {
        title: "EVRENSEL KELEPÇE",
        description: [
            "Diğer cam eşyaları halka standına tutturmak için kullanılır.",
            "Yapıştırma, lehimleme veya kaynağı sırasında nesneleri yerinde tutma işlevi görür.",
            "Fotoğrafçılık ve video çekimlerinde arka planları veya aksesuarları tutturmak için kullanılır.",
            "Dikiş veya yastık yaparken kumaşların gergin kalmasını sağlar.",
            "DIY projeleri sırasında küçük parçaları veya bileşenleri bir araya getirmek için kullanılır."
        ],
        imgSrc: "imgs/UTILITY_CLAMP.jpeg"
    },
    {
        title: "HUNI",
        description: [
            "Sıvıları veya ince taneli kimyasalları (tozları) dar ağızlı laboratuvar ekipmanlarına yönlendirmek için kullanılır.",
            "Polipropilen gibi plastikten yapılmıştır. Yeniden kullanılabilir ürünler otoklavda sterilize edilebilir.",
            "Sıvıların aktarımına yardımcı olmak için kullanılır."
        ],
        imgSrc: "imgs/FUNNEL.jpeg"
    },
    {
        title: "İZLEME CAMI",
        description: [
            "Kimyada sıvıyı buharlaştırmak, katıları tartarken tutmak, küçük miktarda madde ısıtmak ve beakerlerin üzerini kapatmak için kullanılan dairesel konkav cam parçasıdır.",
            "Beakerler için kapak olarak kullanılabilir.",
            "Çökelti ve kristalleşme desenlerini gözlemlemek için kullanılır."
        ],
        imgSrc: "imgs/WATCH_GLASS.jpeg"
    },
    {
        title: "BÜNSEN BRÜLÖRÜ",
        description: [
            "Alevin en sıcak kısmı iç mavi koninin tepe noktasıdır.",
            "Maddeleri ısıtmak için kullanılır.",
            "Maddeleri yakmak amacıyla kullanılabilir.",
            "Yüksek sıcaklıkta nesneleri sterilize etmek için de kullanılır."
        ],
        imgSrc: "imgs/Bunsen_Burner.webp"
    }
];


const container = document.querySelector(".all-contents");

equipmentData.forEach((content, ind) => {
    const div = document.createElement("div");
    if (ind % 2 === 0) {
        div.className = "content content-left";
    } else {
        div.className = "content content-right";
    }

    const ul = document.createElement("ul");
    const h3 = document.createElement("h3");
    h3.textContent = content.title;
    ul.appendChild(h3);

    content.description.forEach(desc => {
        const li = document.createElement("li");
        li.textContent = desc;
        ul.appendChild(li);
    });

    const imgDiv = document.createElement("div");
    imgDiv.className = "img";
    const img = document.createElement("img");
    img.src = content.imgSrc;
    img.alt = content.title;
    imgDiv.appendChild(img);

    div.appendChild(ul);
    div.appendChild(imgDiv);

    container.appendChild(div);
});
