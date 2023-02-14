export class AccountsService{
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  addaccount(name:string, status:string){
    this.accounts.push({name:name,status:status});
  }

  updateaccount(id:number,status:string){
    this.accounts[id].status=status;
  }
}
