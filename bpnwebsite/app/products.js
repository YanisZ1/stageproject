import {mongooseConnect} from "@/lib/mongoose";
import Product from "../../models/Products";

export default  async function getServerSideProps () {
      await mongooseConnect();
  const products = await Product.find({}, null, {sort:{'_id':-1}});
  return {
    props:{
      products: JSON.parse(JSON.stringify(products)),
    }
  };
}