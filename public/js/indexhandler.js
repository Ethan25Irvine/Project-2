$(document).ready(function() {
    // Getting jQuery references to the post body, title, form, and author select
    const bodyInput = $("#body");
    const characterForm = $("#characterForm");
    // Adding an event listener for when the form is submitted
    $(characterForm).on("submit", handleFormSubmit);
    // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
    const url = window.location.search;
    let postId;
    let authorId;
    // Sets a flag for whether or not we're updating a post to be false initially
    let updating = false;

    // If we have this section in our url, we pull out the post id from the url
    // In '?post_id=1', postId is 1
    /*     if (url.indexOf("?post_id=") !== -1) {
            postId = url.split("=")[1];
            getPostData(postId, "post");
        }
        // Otherwise if we have an author_id in our url, preset the author select box to be our Author
        else if (url.indexOf("?author_id=") !== -1) {
            authorId = url.split("=")[1];
        }

        // Getting the authors, and their posts
        getAuthors(); */

    // A function for handling what happens when the form to create a new post is submitted
    function handleFormSubmit(event) {
        event.preventDefault();
        // Wont submit the post if we are missing a body, title, or author
        /*  if (!titleInput.val().trim() || !bodyInput.val().trim() || !authorSelect.val()) {
             return;
         } */
        // Constructing a newPost object to hand to the database
        const newPost = {
            CharacterName: $('charactername')
                .val()
                .trim(),
            Race: $('#race')
                .val()
                .trim(),
            Class: $('#class')
                .val()
                .trim(),
            Alignment: $('#alignment')
                .val()
                .trim()

            /*             Background: $('#Background')
                            .val()
                            .trim(),
                        Strength: $('#Strength')
                            .val()
                            .trim(),
                        Dexterity: $('#Dexterity')
                            .val()
                            .trim(),
                        Constitution: $('#Constitution')
                            .val()
                            .trim(),
                        Intelligence: $('#Intelligence')
                            .val()
                            .trim(),
                        Wisdom: $('#Wisdom')
                            .val()
                            .trim(),
                        Charisma: $('#Charisma')
                            .val()
                            .trim(),
                        CharacterName: $('#Character-Name')
                            .val()
                            .trim(),
                        PassiveWisdom: $('#Passive-Wisdom')
                            .val()
                            .trim(),
                        ArmorClass: $('#Armor-Class')
                            .val()
                            .trim(),
                        Initiative: $('#Initiative')
                            .val()
                            .trim(),
                        Speed: $('#Speed')
                            .val()
                            .trim() */

        };
        console.log(newPost);
        // If we're updating a post run updatePost to update a post
        // Otherwise run submitPost to create a whole new post
        if (updating) {
            newPost.id = postId;
            updatePost(newPost);
        } else {
            submitPost(newPost);
        }
    }

    // Submits a new post and brings user to blog page upon completion
    function submitPost(post) {
        $.post("/api/character", post, function(results) {
            console.log(results);
            // window.location.href = "/index.html";
        });
    }

    // Gets post data for the current post if we're editing, or if we're adding to an author's existing posts
    function getPostData(id, type) {
        let queryUrl;
        switch (type) {
            case "post":
                queryUrl = "/api/posts/" + id;
                break;
            case "author":
                queryUrl = "/api/authors/" + id;
                break;
            default:
                return;
        }
        $.get(queryUrl, function(data) {
            if (data) {
                console.log(data.AuthorId || data.id);
                // If this post exists, prefill our cms forms with its data
                titleInput.val(data.title);
                bodyInput.val(data.body);
                authorId = data.AuthorId || data.id;
                // If we have a post with this id, set a flag for us to know to update the post
                // when we hit submit
                updating = true;
            }
        });
    }

    // A function to get Authors and then render our list of Authors
    /*     function getAuthors() {
            $.get("/api/authors", renderAuthorList);
        }
        // Function to either render a list of authors, or if there are none, direct the user to the page
        // to create an author first
        function renderAuthorList(data) {
            if (!data.length) {
                window.location.href = "/authors";
            }
            $(".hidden").removeClass("hidden");
            const rowsToAdd = [];
            for (let i = 0; i < data.length; i++) {
                rowsToAdd.push(createAuthorRow(data[i]));
            }
            authorSelect.empty();
            console.log(rowsToAdd);
            console.log(authorSelect);
            authorSelect.append(rowsToAdd);
            authorSelect.val(authorId);
        } */

    // Creates the author options in the dropdown
    /*     function createAuthorRow(author) {
            const listOption = $("<option>");
            listOption.attr("value", author.id);
            listOption.text(author.name);
            return listOption;
        } */

    // Update a given post, bring user to the blog page when done
    function updatePost(post) {
        $.ajax({
                method: "PUT",
                url: "/api/characters",
                data: post
            })
            .then(function() {
                window.location.href = "/index.html";
            });
    }
});