# UnifyId Password Manager

## Design Decisions

I decided to use the preloaded state exactly as it was without any changes, which meant there were no id's for credentials. Usually I would use the id from the database row in the url `credentials/credentialId`, but instead I decided to use the site name. This made sense because whether you clicked on a credential in the Shared or All indices, you would still want to see all the information for that site, including sharing information.

The preloaded state contained arrays of objects, which meant in my reducers I had to iterate through the array to find the correct object to update or delete. It might be more efficient in future to store objects of objects with id's, so that credentials can be deleted or updated in constant time.

I decided to turn the arrays in the global state into an object for the All setting of the credentials index, because I needed the additional information about `lender_user_id` and `borrower_user_id` to display index items, without having duplicate index items for the same site. Unfortunately, the way I implemented my `createObject` function does not allow for multiple usernames for the same site.

## Future Features and Improvements

- far left sidebar
- login/logout
- change state shape to store objects of objects
- allow for multiple usernames for the same site
- search functionality
- most used credentials index

TODO:

- capitalize names of sites
- alphabetize sites
- change css class of active setting or site to turn gray
- form to share w/ others
- delete button for credentials
