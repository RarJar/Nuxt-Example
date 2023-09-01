export default async(req,res) => {
    const data = await $fetch('https://jsonplaceholder.typicode.com/todos');
    return data
}