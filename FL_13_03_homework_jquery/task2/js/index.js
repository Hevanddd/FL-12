const $list = $('.list');
const $input = $('#add-input');
const $add = $('#add-submit');

let todos = [];

if (localStorage.getItem('0')){
  for ( let i=0; i < localStorage.length; i++){
    console.log(localStorage.getItem(i));
    todos.push(JSON.parse(localStorage.getItem(i)));
  }
} else {
  todos = [
    {
      text: 'Buy milk',
      done: false
    },
    {
      text: 'Play with dog',
      done: true
    }
  ];
}

$.fn.todolist = function() {
  let doneTasks = 0,
      numbersOfTasks = 0,
      tasksInProgress = 0;
  
  this.empty();
  localStorage.clear();

  $(todos).each(function(idx) {
    if(this.done){
      doneTasks++;
    } else{
      tasksInProgress++;
    }
    numbersOfTasks++;


    this['idx'] = idx;
    localStorage.setItem(idx, JSON.stringify(this));
    
    const itemTextClass = this.done ? 'done' : '';
    const $listItem = $('<li class="item"> </li>');
    const $listItemText = $(`<span class="item-text ${itemTextClass}">${this.text}</span>`);
    const $listItemButton = $('<button class="item-remove">Remove</button>');
    $listItem.append($listItemText);
    $listItem.append($listItemButton);

    $($listItemText).click({task: this},markDone);
    $($listItemButton).click({task: this}, removeTask);

    $list.append($listItem);
  })

  $('span.total').text(doneTasks);
  $('span.in-progress').text(tasksInProgress);
  $('span[some-attr]').text(numbersOfTasks);

};

$add.click((event)=>{

  if(!$input.val()){
    alert('Enter something');
    return false;
  }
  const listItem = {
    text: $input.val(),
    done: false
  }
  todos.push(listItem);
  
  event.preventDefault();
  $('.list').todolist();
});

function removeTask(event){

  const task = event.data.task;
  todos.splice(task.idx, 1);

  $('.list').todolist();
}

function markDone(event){

  const taskisDone = event.data.task.done;
  
  if (taskisDone){
    event.data.task.done = false;
  } else{
    event.data.task.done = true;
  }

  $('.list').todolist();
}

$($input).keyup(() => {
  const $filter = $($input)[0].value.toLowerCase();
  const $li = $('.item');

  $($li).each(function (){
    const $span = $(this).find('span');
    const $txtValue = $span.text().toLowerCase();

    if($txtValue.indexOf($filter) > -1){
      $(this).show();
    } else {
      $(this).hide();
    }
  })
})

$('.list').todolist();