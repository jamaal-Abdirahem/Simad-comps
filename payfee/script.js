"use strict"

const navMenu=document.querySelector('.menu');
const navElements=document.querySelector('.nav-elements');
const header=document.querySelector('header');
const aside=document.querySelector('.aside');
const asideMenu=document.querySelector('.side-menu');

navMenu.addEventListener('click',()=>{
    navMenu.classList.toggle('show-nav');
    navElements.classList.toggle('show-nav');
    header.classList.toggle('show-nav');
});

asideMenu.addEventListener('click',()=>{
    aside.classList.toggle('show-aside-bar');
    asideMenu.classList.toggle('show-aside-bar');
})

// Close menus when clicking outside
document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !navElements.contains(event.target)) {
        navMenu.classList.remove('show-nav');
        navElements.classList.remove('show-nav');
        header.classList.remove('show-nav');
    }

    if (!aside.contains(event.target) && !asideMenu.contains(event.target)) {
        aside.classList.remove('show-aside-bar');
        asideMenu.classList.remove('show-aside-bar');
    }
});

document.querySelectorAll('.navigation').forEach(navItem => {
    navItem.addEventListener('click', function() {
        // Remove active class from all navigation items
        document.querySelectorAll('.navigation').forEach(item => item.classList.remove('active'));
        
        // Add active class to clicked item
        this.classList.add('active');
        
        // Hide all page sections
        document.querySelectorAll('.page-section').forEach(section => section.style.display = 'none');
       
        
        // Show the targeted page section
        const targetSection = this.getAttribute('data-target');
        document.getElementById(targetSection).style.display = 'block';
    });
});


// Initially, show the first section and hide others
document.querySelectorAll('.page-section ').forEach((section, index) => {
    section.style.display = index === 0 ? 'block' : 'none';
});


document.querySelectorAll('.payfee-button').forEach(navItem => {
    navItem.addEventListener('click', function() {
        // Remove active class from all navigation items
        document.querySelectorAll('.payfee-button').forEach(item => item.classList.remove('active'));
        
        // Add active class to clicked item
        // this.classList.add('active');
        
        // Hide all page sections
        document.querySelectorAll('.page-section').forEach(section => section.style.display = 'none');
       
        
        // Show the targeted page section
        const targetSection = this.getAttribute('data-target');
        document.getElementById(targetSection).style.display = 'block';
    });
});

document.querySelectorAll('.download-clearance-button').forEach(navItem => {
    navItem.addEventListener('click', function() {
        // Remove active class from all navigation items
        document.querySelectorAll('.download-clearance-button').forEach(item => item.classList.remove('active'));
        
        // Add active class to clicked item
        // this.classList.add('active');
        
        // Hide all page sections
        document.querySelectorAll('.page-section').forEach(section => section.style.display = 'none');
       
        
        // Show the targeted page section
        const targetSection = this.getAttribute('data-target');
        document.getElementById(targetSection).style.display = 'block';
    });
});
document.querySelectorAll('.clearance-button').forEach(navItem => {
    navItem.addEventListener('click', function() {
        // Remove active class from all navigation items
        document.querySelectorAll('.clearance-button').forEach(item => item.classList.remove('active'));
        
        // Add active class to clicked item
        // this.classList.add('active');
        
        // Hide all page sections
        document.querySelectorAll('.page-section').forEach(section => section.style.display = 'none');
       
        
        // Show the targeted page section
        const targetSection = this.getAttribute('data-target');
        document.getElementById(targetSection).style.display = 'block';
    });
});
document.querySelectorAll('.logo-img').forEach(navItem => {
    navItem.addEventListener('click', function() {
        // Remove active class from all navigation items
        document.querySelectorAll('.logo-img').forEach(item => item.classList.remove('active'));
        
        // Add active class to clicked item
        // this.classList.add('active');
        
        // Hide all page sections
        document.querySelectorAll('.page-section').forEach(section => section.style.display = 'none');
       
        
        // Show the targeted page section
        const targetSection = this.getAttribute('data-target');
        document.getElementById(targetSection).style.display = 'block';
    });
});



function generateRefNumber() {
    return Math.floor(Math.random() * 1000000000000).toString().padStart(12, '0');
}

function getCurrentTime() {
    const now = new Date();
    return now.toLocaleString('en-GB', { hour12: false });
}

function playSound() {
    const audio = new Audio('payment-click.mp3');
    audio.play();
}

document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const senderName = document.getElementById('senderName').value;
    const recipientName = document.getElementById('recipientName').value;
    const accountNumber = document.getElementById('accountNumber').value;
    const amount = document.getElementById('amount').value;

    const refNumber = generateRefNumber();
    const paymentTime = getCurrentTime();
    const adminFee = (amount * 0.00).toFixed(2);

    document.getElementById('refNumber').textContent = refNumber;
    document.getElementById('paymentTime').textContent = paymentTime;
    document.getElementById('modalSenderName').textContent = senderName;
    document.getElementById('modalRecipientName').textContent = recipientName;
    document.getElementById('modalAccountNumber').textContent = accountNumber;
    document.getElementById('modalAmount').textContent = `$ ${Number(amount).toLocaleString()}`;
    document.getElementById('adminFee').textContent = `$ ${Number(adminFee).toLocaleString()}`;

    playSound();

    document.getElementById('modal').style.display = 'flex';
});

document.querySelectorAll('.close-button').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('modal').style.display = 'none';
    });
});

document.getElementById('modal').addEventListener('click', function(event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});
