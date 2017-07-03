# UnifyId Password Manager

## Technologies

I built this project using React,

## Design Decisions

I decided to use react-router and show the `CredentialDetail` component for each site at the url `credentials/:website`, instead of rendering the `CredentialDetail` component from the `CredentialIndexItem` component and passing the data down as props. This kept the `CredentialDetail` and `CredentialIndex` components more separate, which I thought was cleaner. Although I would usually use an id in the url, the website name seemed a logical alternative because you would always want to see all the information for a particular site, including sharing information. There would never be more than one detail page for one site.

I kept the preloaded global state exactly as given, but changed the arrays into objects to pass to my `CredentialIndex` component. I needed the additional information about `lender_user_id` and `borrower_user_id` to display index items, without having duplicate index items for the same site. Unfortunately, the way I implemented my `allObject` function does not allow for multiple usernames for the same site.

Having arrays in my global state meant my reducers had to iterate through the array to find the correct object to update or delete. It might be more efficient in future to store objects of objects with id's, so that credentials can be deleted or updated in constant time.



## Future Features and Improvements

- far left sidebar
- login/logout
- change state shape to store objects of objects
- allow for multiple usernames for the same site
- search functionality
- most used credentials index
- delete confirmation page

TODO:

- capitalize names of sites
- alphabetize sites
- change css class of active site to turn gray
- form to share w/ others
