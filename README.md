# UnifyId Password Manager

![screenshot](https://res.cloudinary.com/dq5kxnx9d/image/upload/v1499124309/Screen_Shot_2017-07-03_at_4.21.32_PM_szqzav.png)

## Technologies

I built this project using React and Redux.

## Design Decisions

I decided to use react-router and show the `CredentialDetail` component for each site at the url `credentials/:website`, instead of rendering the `CredentialDetail` component from the `CredentialIndexItem` component and passing the data down as props. This kept the `CredentialDetail` and `CredentialIndex` components more separate, which I thought was cleaner. Although I would usually use an id in the url, the website name seemed a logical alternative because you would always want to see all the information for a particular site, including sharing information. There would never be more than one detail page for one site.

I kept the preloaded global state exactly as given, but changed the arrays into objects to pass to my `CredentialIndex` component. I needed the additional information about `lender_user_id` and `borrower_user_id` to display index items, without having duplicate index items for the same site. Unfortunately, the way I implemented my `allObject` function does not allow for multiple usernames for the same site.

Having arrays in my global state meant my reducers had to iterate through the array to find the correct object to update or delete. It might be more efficient in future to store objects of objects with id's, so that credentials can be deleted or updated in constant time.

## Future Features and Improvements

- change css class of site index item to indicate which detail page is showing
- change global state shape to store objects of objects
- allow for multiple usernames for the same site
- allow for multiple shares of the same credential
- toggle sharing form with a button
- allow for un-sharing a credential (using removeLend action)
- controlled form for credential details and button to edit
- you shouldn't be able to share credentials you're borrowing from someone else!!!
- delete confirmation page
- sharing confirmation message
- alphabetize sites
- credential search functionality
- most used credentials index
- far left sidebar
- login/logout
