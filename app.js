let isMove = false; // 움직였는지 안움직였는지
	let isProceeding = false; // 진행중인지 아닌지
	let totalCount = 120;

	document.addEventListener('DOMContentLoaded', () => {

      const notMove = document.querySelector('.timer');
		const proceed = document.querySelector('.proceed');
		const success = document.querySelector('.success');
		const failed = document.querySelector('.failed');

		const timer = () => {
		let _totalCount = totalCount;
      let second = 0;  

		setInterval(() => {

         let minute = parseInt(_totalCount/ 60 );

         timer.innerHTML = '';
         timer.innerHTML = `${minute}분 ${second}초`
			
         
         if(second == 0){
            second = 60;
         }else {
            second--;
         }
         
         
         if (isMove == true) {
				failed.classList.remove('off');
            failed.classList.add('on');
				return;
			}

			if (_totalCount == 0) {
				success.classList.remove('off');
            success.classList.add('on');
				return;
			}
		}, 1000);
	}



		success.classList.add('off');
		failed.classList.add('off');
		proceed.classList.add('on');

		timer();

		notMove.addEventListener('click', () => {
            if(failed.className.includes('on') || success.className.includes('on')){
               isMove = false;

               success.classList.add('on');
               success.classList.add('off');

               failed.classList.remove('on');
               failed.classList.add('off');
               
               proceed.classList.remove('off');
               proceed.classList.add('on');

               timer();
            }
		})

		
      const eventHandler =( )=>{
      

         if (proceed.className.includes('on')) {
				isMove = true;
            proceed.classList.remove('on');
            proceed.classList.add('off');
      }

      document.addEventListener('mousemove', () => {
			

            timer();
			}

		})

		document.addEventListener('keyup', () => {

		})
	})