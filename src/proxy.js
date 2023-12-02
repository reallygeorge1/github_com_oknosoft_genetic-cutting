
const res = {"scrapsIn":[{"length":3200,"height":2600,"quantity":1,"id":1,"stick":1},{"length":3200,"height":2600,"quantity":1,"id":2,"stick":1},{"length":3200,"height":2600,"quantity":1,"id":3,"stick":1},{"length":3200,"height":2600,"quantity":1,"id":4,"stick":1},{"length":3200,"height":2600,"quantity":1,"id":5,"stick":1}],"scrapsOut":[{"id":2,"x":2680,"y":1530,"length":520,"height":1070},{"id":5,"x":2070,"y":1760,"length":1130,"height":840}],"products":[{"id":1,"x":1200,"y":0,"length":1200,"height":1000,"rotate":1,"stick":1,"info":"1"},{"id":1,"x":2200,"y":0,"length":1200,"height":1000,"rotate":1,"stick":1,"info":"1"},{"id":5,"x":1200,"y":1200,"length":1340,"height":990,"rotate":1,"stick":1,"info":""},{"id":5,"x":2190,"y":1200,"length":1340,"height":990,"rotate":1,"stick":1,"info":""},{"id":1,"x":0,"y":0,"length":1000,"height":1200,"rotate":0,"stick":1,"info":"1"},{"id":2,"x":0,"y":1000,"length":920,"height":1200,"rotate":0,"stick":1,"info":""},{"id":10,"x":0,"y":1920,"length":660,"height":1110,"rotate":0,"stick":1,"info":""},{"id":9,"x":0,"y":0,"length":1530,"height":780,"rotate":1,"stick":2,"info":""},{"id":9,"x":780,"y":0,"length":1530,"height":780,"rotate":1,"stick":2,"info":""},{"id":9,"x":1560,"y":0,"length":1530,"height":780,"rotate":1,"stick":2,"info":""},{"id":9,"x":2340,"y":0,"length":1530,"height":780,"rotate":1,"stick":2,"info":""},{"id":5,"x":0,"y":1530,"length":990,"height":1340,"rotate":0,"stick":2,"info":""},{"id":5,"x":1340,"y":1530,"length":990,"height":1340,"rotate":0,"stick":2,"info":""},{"id":6,"x":0,"y":1110,"length":1440,"height":770,"rotate":1,"stick":3,"info":""},{"id":12,"x":770,"y":1110,"length":1390,"height":690,"rotate":1,"stick":3,"info":""},{"id":12,"x":1460,"y":1110,"length":1390,"height":690,"rotate":1,"stick":3,"info":""},{"id":1,"x":2150,"y":1110,"length":1200,"height":1000,"rotate":1,"stick":3,"info":"1"},{"id":10,"x":0,"y":0,"length":1110,"height":660,"rotate":1,"stick":3,"info":""},{"id":10,"x":660,"y":0,"length":1110,"height":660,"rotate":1,"stick":3,"info":""},{"id":4,"x":1320,"y":0,"length":1100,"height":880,"rotate":1,"stick":3,"info":""},{"id":3,"x":2200,"y":0,"length":1090,"height":960,"rotate":1,"stick":3,"info":"2"},{"id":12,"x":0,"y":1210,"length":1390,"height":690,"rotate":1,"stick":4,"info":""},{"id":12,"x":690,"y":1210,"length":1390,"height":690,"rotate":1,"stick":4,"info":""},{"id":12,"x":1380,"y":1210,"length":1390,"height":690,"rotate":1,"stick":4,"info":""},{"id":1,"x":2070,"y":1210,"length":1200,"height":1000,"rotate":1,"stick":4,"info":"1"},{"id":8,"x":0,"y":0,"length":1210,"height":760,"rotate":1,"stick":4,"info":""},{"id":8,"x":760,"y":0,"length":1210,"height":760,"rotate":1,"stick":4,"info":""},{"id":8,"x":1520,"y":0,"length":1210,"height":760,"rotate":1,"stick":4,"info":""},{"id":2,"x":2280,"y":0,"length":1200,"height":920,"rotate":1,"stick":4,"info":""},{"id":11,"x":0,"y":0,"length":640,"height":1310,"rotate":0,"stick":5,"info":""},{"id":3,"x":0,"y":640,"length":960,"height":1090,"rotate":0,"stick":5,"info":"2"},{"id":3,"x":0,"y":1600,"length":960,"height":1090,"rotate":0,"stick":5,"info":"2"},{"id":7,"x":1310,"y":0,"length":1240,"height":760,"rotate":1,"stick":5,"info":"3"},{"id":7,"x":1310,"y":1240,"length":1240,"height":760,"rotate":1,"stick":5,"info":"3"},{"id":4,"x":2070,"y":0,"length":880,"height":1100,"rotate":0,"stick":5,"info":""},{"id":4,"x":2070,"y":880,"length":880,"height":1100,"rotate":0,"stick":5,"info":""}]};

module.exports = function wrapper({job_prm}) {
  return function proxy(data) {

    return fetch(job_prm.server.cut_url, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => Object.assign(res, {options: data.options}));

    //return Promise.resolve(res);
  }
}