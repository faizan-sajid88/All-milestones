# Milestone-7: Imgur

## Learning Competencies

At the end of this milestone you will learn

- What are Task runners and Module bundlers
- Understanding about Design Patterns in Javascript
- Understanding the fundamentals of React
- How to split the UI into independent and resuable **Components** in React
- How to maintain internal **state** of the Component and pass the data between Components using **props**
- Understanding the lifecycle of a Component


## Guide
[Click here to watch milestone guide](https://drive.google.com/open?id=11zh5Me-U9cIdbcmVdXOB7v1ApTCX7YG6)

## Problem Statement

> An **image hosting service** allows individuals to upload images to an Internet website. The image host will then store the image onto its server, and show the individual different types of code to allow others to view that image.  
> Prior to the development of image hosting services, the display and exchange of images on the early public Internet of the 1980s-1990s was a laborious and difficult process. Before the world wide web was developed, images would primarily be downloaded manually from file servers or from [binary newsgroups](https://en.wikipedia.org/wiki/Usenet_newsgroup#Binary_newsgroups) on [Usenet](https://en.wikipedia.org/wiki/Usenet), and displayed with a separate image viewer. The rise of the world wide web in the 1990s brought text and images together, allowing for inline display of images without separate downloading.  
> When you want to share a photo or a gallery with friends, family, a message board, or even the entire Internet, an image hosting site is the best way to upload, store, and share your files. However, there are many image hosting sites, all with different features.
> [IMGUR](https://imgur.com/) is the internet's most loved image hosting website because it lets you store as many photos as you like without having them deleted until you decide you want them gone. It's simple, easy to use, provides with various features and above all it's free. Also another beauty of the app is that it works as well without logging in or signing up.
> It has a massive user base with support for popular image formats and user comments. It's actually more of a central hub for storing and sharing photos than just a simple image hosting service.
> It is the place where you’ll find the funniest, most informative and inspiring images, memes, GIFs, and visual stories served up in an endless stream of bite-sized fun. Powered by a passionate community of people from all around the world, anyone can join to share cool stuff and vote the best to the top
> In addition to storing your photos, Imgur lets you crop and resize pictures as well as adjust other advanced settings through its online editor.
> We're going to build a similar app today for our MileStone.

**Releases**

1. Start with Wireframing. It's a part of UI of design and an extremely essential process of the web design workflow. You can use **excalidraw** to create a rough version of your wireframing. Decide:  
    1. What views are involved in the app? 
    2. Are you using too many elements? Are the views getting redundant and cluttered?
    3. What buttons/interactions will trigger which other views? 
2. Initialize your project with create-react-app. Take note of what purpose each folder serves and why it is important. 
3. Deploy it to Heroku so that you can track your app 
4. Create ImageCard component as below. 
    
    ![2](https://user-images.githubusercontent.com/19927261/175977970-c02a7491-88e0-4d8c-b3af-4c94b70c1a8d.png)
    
5. Create an ImageGallery component, which in turn will have a number of smaller ImageCard components which have the image itself and a small tags section for the image. Use the Below Image for reference:
    
    *hint: what higher order function will you use to render the image cards inside your image gallery?* 
    
    *Would you use .map() or .forEach()?* 
    
    *how would you render the same image card component with different data?* 
    *Do you know about props?*
    
    ![Untitled](https://user-images.githubusercontent.com/19927261/175978050-029bde3e-a95c-47ff-8b27-ee44d8489274.png)
    
6. create a NavBar component, which contains sign in, sign up an "add new image" button.
    
    ![Untitled (1)](https://user-images.githubusercontent.com/19927261/175978140-07c7a43e-6ca6-4d8b-9f9c-47c153211929.png)
    
7. Create an upload modal, that lets the user upload images. 
8. Add a Modal that will be opened upon clicking the Sign In Button, which renders a sign in page, as below:
    
    *hint: how do you toggle between opening and closing a modal? Do you use State?* 
    
    ![Untitled (2)](https://user-images.githubusercontent.com/19927261/175978246-43391bc1-3d9f-4755-9de5-2ccbe4e5a4d0.png)
    

9. add a filter  menu to your ImageGallery, which uses conditional rendering to display images according to the specified criteria. 

![Untitled (3)](https://user-images.githubusercontent.com/19927261/175978353-954dea6a-668f-439d-a6d2-ea3bf6adcab1.png)

10. lastly, add a footer component. 
11. wire all your components in the frontend to the endpoints created in the backend to make your fullstack app complete. 
