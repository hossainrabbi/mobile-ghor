const data = [
    {
        id: 1,
        title: 'Vision 1',
        details:
            'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
        brand: 'Itel',
        imageUrl:
            'https://mobilemall.pk/public_html/images/product/product_1600537708Itel-Vision-1-Price-In-Pakistan.jpg',
        price: 53,
    },
    {
        id: 2,
        title: 'Z20',
        details:
            'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
        brand: 'Symphony',
        imageUrl:
            'https://www.mobiledokan.com/wp-content/uploads/2019/11/Symphony-Z20-mobiledokan.jpg',
        price: 100,
    },
    {
        id: 3,
        title: 'P36',
        details:
            'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
        brand: 'Itel',
        imageUrl: 'https://techjaja.com/wp-content/uploads/2020/07/itel-P36-and-P36-Pro-LTE.jpg',
        price: 92,
    },
    {
        id: 4,
        title: 'Z16',
        details:
            'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
        brand: 'Symphony',
        imageUrl:
            'https://www.mobilefactbd.com/wp-content/uploads/2020/08/Symphony-Z16-1-500x500.jpg',
        price: 100,
    },
    {
        id: 5,
        title: 'Z40',
        details:
            'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
        brand: 'Symphony',
        imageUrl:
            'https://www.symphony-mobile.com/storage/products/vXFfrMOWNu7uO5ELwm1LxtsEpUPJSh4zopgIZjgi.png',
        price: 74,
    },
    {
        id: 6,
        title: 'i67',
        details:
            'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
        brand: 'Symphony',
        imageUrl:
            'https://www.symphony-mobile.com/storage/products/Nav0Gms0TfV6jm3FxvRrMBGJTVQXaENksaKTpIxm.png',
        price: 85,
    },
    {
        id: 7,
        title: 's433',
        details: 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
        brand: 'Symphony',
        imageUrl: 'https://www.symphony-mobile.com/storage/slides/gsGqsi7WIVjpFPwhpzN3Ds433.png',
        price: 79,
    },
    {
        id: 8,
        title: 'Z20',
        details:
            'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
        brand: 'Symphony',
        imageUrl: 'https://www.gsmarena.com.bd/images/products/Symphony-Z28-Cranberry-Red.jpg',
        price: 87,
    },
    {
        id: 9,
        title: 'i72',
        details:
            'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
        brand: 'Symphony',
        imageUrl: 'https://www.gizmochina.com/wp-content/uploads/2019/05/Symphony-i72-500x500.jpg',
        price: 77,
    },
    {
        id: 10,
        title: 'Z50',
        details:
            'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
        brand: 'Symphony',
        imageUrl: 'https://www.mobiledokan.com/wp-content/uploads/2020/03/Symphony-Z50.jpg',
        price: 73,
    },
    {
        id: 11,
        title: 'Z20',
        details: 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
        brand: 'Symphony',
        imageUrl: 'https://www.mobilewithprices.com/products/Symphony%20Z20.png',
        price: 61,
    },
    {
        id: 12,
        title: 'i15',
        details:
            'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
        brand: 'Symphony',
        imageUrl: 'https://www.mobilemaya.co/wp-content/uploads/2018/11/Symphony-i15.jpg',
        price: 81,
    },
    {
        id: 13,
        title: 'Vision 1',
        details:
            'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
        brand: 'Itel',
        imageUrl:
            'https://images.indulgexpress.com/uploads/user/imagelibrary/2020/2/11/original/news_1.jpg?w=360&dpr=2.6',
        price: 90,
    },
    {
        id: 14,
        title: 'Vision 2',
        details:
            'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
        brand: 'Itel',
        imageUrl:
            'https://images.hindustantimes.com/tech/img/2021/04/26/960x540/itel_vision_2_1619432727693_1619432733286.jpg',
        price: 65,
    },
    {
        id: 15,
        title: 'Vision 1',
        details:
            'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
        brand: 'Itel',
        imageUrl:
            'https://images.hindustantimes.com/tech/rf/image_size_960x540/HT/p2/2020/02/17/Pictures/vision-poster-new-cs6_98aebdac-516b-11ea-ac83-d06189239a09.jpg',
        price: 61,
    },
    {
        id: 16,
        title: 'S13',
        details:
            'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
        brand: 'Itel',
        imageUrl: 'https://techweez.com/wp-content/uploads/2018/09/Itel-S13-1.jpg',
        price: 52,
    },
    {
        id: 17,
        title: 'i2020',
        details:
            'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
        brand: 'INFINIX',
        imageUrl: 'https://www.thestatesman.com/wp-content/uploads/2020/04/INFINIX.jpg',
        price: 89,
    },
    {
        id: 18,
        title: 'L5503',
        details:
            'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
        brand: 'Itel',
        imageUrl: 'https://www.mobiledokan.co/wp-content/uploads/2019/05/Itel-L5503.jpg',
        price: 53,
    },
    {
        id: 19,
        title: 'Magic 2',
        details:
            'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
        brand: 'Itel',
        imageUrl:
            'https://mobilemall.pk/public_html/images/product/product_1600537127Itel-Magic-2-Price-In-Pakistan.jpg',
        price: 54,
    },
    {
        id: 20,
        title: 'P36',
        details:
            'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
        brand: 'Itel',
        imageUrl: 'https://www.mobiledokan.co/wp-content/uploads/2020/07/Itel-P36-Deep-Blue.jpg',
        price: 52,
    },
];

export default data;
