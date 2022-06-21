import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { Wine } from 'src/app/models/wine.model';
import { Doctor } from 'src/app/models/doctor.model';
import { PostService } from 'src/app/services/post.service';
import { WinesService } from 'src/app/services/wines.service';
import { DoctorsService } from 'src/app/services/doctors.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  WineList: Wine[] = [];
  PostList: Post[] = [];
  DoctorList: Doctor[] = [];

  postForm = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    id: new FormControl('')

  });
  doctorForm = new FormGroup({
    status: new FormControl('',[
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(3)
    ]),
    age: new FormControl(''),
    id: new FormControl('')
  });
  selectedPost:Post = {id:0,title:"",author:""} as Post ;
  constructor(
    private winesService: WinesService,
    private postService: PostService,
    private doctorsService: DoctorsService
  ) { }

  // bu component yüklendiğinde
  ngOnInit(): void {
    try {
      this.loadWines();

    } catch (error) {
      console.error(error);
    }

    try {
      this.loadPosts();
    } catch (error) {
      console.error(error);

    }
    try {
      this.loadDoctors();
    } catch (error) {
      console.error(error);

    }
  }

  loadPosts() {
    this.postService.getPostList().subscribe((data) => {
      this.PostList = data;
    })
  }

  loadWines(): void {
    this.winesService.getWinelist().subscribe((data) => {
      this.WineList = data;
    });
  }

  loadDoctors() {
    this.doctorsService.getDoctorList().subscribe((data) => {
      this.DoctorList = data;
    })
  }

  addPost() {
    const post = this.postForm.value;
    this.postService.createPost(post as Post).subscribe((response) => {
      console.log(response);
      this.loadPosts();
    });
  }

  deletePost(id: number) {
    this.postService.deletePost(id).subscribe((data) => {
      console.log(data);
      this.loadPosts();
    })
  }
  onSubmitPostForm() {
    this.addPost();
  }

  onSubmitDoctorForm() {
    this.addDoctor();
  }

  addDoctor() {
    let d = this.doctorForm.value;
    d.id = 0;
    this.doctorsService.createDoctor(d as Doctor).subscribe((response) => {
      console.log(response);
      this.loadDoctors();
    });
  }

  deleteDoctor(id: number) {
    this.doctorsService.deleteDoctor(id).subscribe((data) => {
      console.log(data);
      this.loadDoctors();
    });
  }

  populatePost(post:Post) {
    this.selectedPost = post;
  }
  populateDoctor(d:Doctor) {
    this.doctorForm.patchValue(d);
  }
  updateDoc(){
    const d = this.doctorForm.value;
    this.doctorsService.updateDoctor(d as Doctor).subscribe((response) => {
      console.log(response);
      this.loadDoctors();
    });
  }

}
