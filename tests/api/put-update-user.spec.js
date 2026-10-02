test ('Update user' , async ({}) => {
   
    const api = await request.newContext ({
       baseURL : 'https://reqres.in/' 
    }); 
   
    const response = await api.put('api/users/2', {
        data: {
        name: 'Brandon',
        job: 'Senior QA engineer'
    }
    });

    const body = await response.json();

    console.log(body);

    assert(response.status(200));

    expect(body.name).toBe('Brandon');
    expect(body.job).toBe('Senior QA engineer');
    expect(body.updatedAt).toBeTruthy();

});
