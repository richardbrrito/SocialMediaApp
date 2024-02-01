import PostForm from "@/components/forms/PostForm"
import { useGetPostById } from "@/lib/react-query/queriesAndMutations"
import { Loader } from "lucide-react"
import { useParams } from "react-router-dom"


const EditPost = () => {

  const{id} = useParams<{id: string}>()
  const{data: post, isPending} = useGetPostById(id || '');

  if(isPending) return <Loader/>

  
  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="flex-start gap-3 justify-start w-full max-w-5xl">
          <img
            src="/assets/icons/edit.svg"
            width={36}
            height={36}
            alt="edit"
            className="invert-white"
          />
          <h2 className="h3-bold md:h2-bold text-left w-full">Edit Post</h2>
        </div>

        {isPending ? <Loader /> : <PostForm action="Update" post={post} />}
      </div>
    </div>
  );
};

export default EditPost;