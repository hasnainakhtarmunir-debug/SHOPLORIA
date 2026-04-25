@GetMapping("/about")
public String showaboutpage() {
    return "about"; // this opens about.html file
}

@GetMapping("/Home")
publuic String showHomePage() {
    return "Home"; // this opens Home.html file
}

@GetMapping("/Contact")
public String showContactPage() {
    return "Contact"; // this opens Contact.html file
}

@GetMapping("/Products")
public String showProductsPage() {
    return "Products"; // this opens Products.html file
}



