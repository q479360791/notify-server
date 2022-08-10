export default function main() {
  if (Promise.allSettled === undefined) {
    Promise.allSettled = function (promises: any) {
      const done = function (result: any) {
        return {
          status: "fulfilled",
          value: result
        };
      };
      const fail = function (result: any) {
        return {
          status: "rejected",
          reason: result
        };
      };
      const map = function (value: any) {
        return Promise.resolve(value).then(done).catch(fail);
      };
      return Promise.all(promises.map(map));
    };
  }
}