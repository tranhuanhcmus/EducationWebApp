/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Text from "../components/Text";
export default function Example() {
  return (
    <form className="bg-white w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700l p-4 overflow-auto">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h1 className="mt-1 text-md text-black-600 text-center">
            IS PHOTOGRAPHY ART ?
          </h1>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <Text>
                This may seem a pointless question today. Surrounded as we are
                by thousands of photographs, most of us take for granted that,
                in addition to supplying information and seducing customers,
                camera images also serve as decoration, afford spiritual
                enrichment, and provide significant insights into the passing
                scene. But in the decades following the discovery of
                photography, this question reflected the search for ways to fit
                the mechanical medium into the traditional schemes of artistic
                expression.
              </Text>
              <br />
              <br />
              <Text>
                The much-publicized pronouncement by painter Paul Delaroche that
                the daguerreotype(*) signaled the end of painting is perplexing
                because this clever artist also forecast the usefulness of the
                medium for graphic artists in a letter written in 1839.
                Nevertheless, it is symptomatic of the swing between the
                outright rejection and qualified acceptance of the medium that
                was fairly typical of the artistic establishment. Discussion of
                the role of photography in art was especially spirited in
                France, where the internal policies of the time had created a
                large pool of artists, but it was also taken up by important
                voices in England. in both countries, public interest in this
                topic was a reflection of the belief that national stature and
                achievement in the arts were related.
              </Text>
              <br />
              <br />
              <Text>
                From the maze of conflicting statements and heated articles on
                the subject, three main positions about the potential of camera
                art emerged. The simplest, entertained by many painters and a
                section of the public, was that photographs should not be
                considered 'art because they were made with a mechanical device
                and by physical and chemical phenomena instead of by human hand
                and spirit; to some, camera images seemed to have more in common
                with fabric produced by machinery in a mill than with handmade
                creations fired by inspiration. The second widely held view,
                shared by painters, some photographers, and some critics, was
                that photographs would be useful to art but should not be
                considered equal in creativeness to drawing and painting.
                Lastly, by assuming that the process was comparable to other
                techniques such as etching and lithography, a fair number of
                individuals realized that camera images were or could be as
                significant as handmade works of art and that they might have a
                positive influence on the arts and on culture in general.
              </Text>
              <br />
              <br />
              <Text>
                Artists reacted to photography in various ways. Many portrait
                painters miniaturists in particular who realized that
                photography represented the 'handwriting on the wall' became
                involved with daguerreotyping or paper photography in an effort
                to save their careers; some incorporated it with painting, while
                others renounced painting altogether. Still other painters, the
                most prominent among them the French painter, Jean Auguste
                Dominique Ingres, began almost immediately to use photography to
                make a record of their own output and also to provide themselves
                with source material for poses and backgrounds, vigorously
                denying at the same time its influence on their vision or its
                claims as art.
              </Text>
              <br />
              <br />

              <Text>
                The view that photographs might be worthwhile to artists was
                enunciated in considerable detail by Lacan and Francis Wey. The
                latter, an art and literary critic, who eventually recognised
                that camera images could be inspired as well as informative,
                suggested that they would lead to greater naturalness in the
                graphic depiction of anatomy, clothing, likeness, expression,
                and landscape. By studying photographs,\ true artists, he
                claimed, would be relieved of menial tasks and become free to
                devote themselyes to the more important spiritual aspects of
                their work.
              </Text>
              <br />
              <br />

              <Text>
                Wey left unstated what the incompetent artist might do as an
                alternative, but according to the influential French critic and
                poet Charles Baudelaire, writing in response to an exhibition of
                photography in 1859, lazy and untalented painters would become
                photographers. Fired by a belief in art as an imaginative
                embodiment of cultivated ideas and dreams, Baudelaire regarded
                photography as 'a very humble servant of art and science'; a
                medium largely unable to transcend 'external reality. For this
                critic, photography was linked with 'the great industrial
                madness' of the time, which in his eyes exercised disastrous
                consequences on the spiritual qualities of life and art.
              </Text>
              <br />
              <br />
              <Text>
                Eugene Delacroix was the most prominent of the French artists
                who welcomed photography as helpmate but recognized its
                limitations. Regretting that 'such a wonderful invention' had
                arrived so late in his lifetime, he still took lessons in
                daguerreotyping, and both commissioned and collected
                photographs. Delacroix's enthusiasm for the medium can be sensed
                in a journal entry noting that if photographs were used as they
                should be, an artist might raise himself to heights that we do
                not yet know' The question of whether the photograph was
                document or art aroused interest in England also. The most
                important statement on this matter was an unsigned article that
                concluded that while photography had a role to play, it should
                not be 'constrained' into 'competition' with art; a more
                stringent viewpoint led critic Philip Gilbert Hamerton to
                dismiss camera images as 'narrow in range, emphatic in
                assertion, telling one truth for ten falsehoods'
              </Text>
              <br />
              <br />
              <Text>
                These writers reflected the opposition of a section of the
                cultural elite in England and France to the 'cheapening of art
                which the growing acceptance and purchase of camera pictures by
                the middle class represented. Technology made photographic
                images a common sight in the shop windows of Regent Street and
                Piccadilly in London and the commercial boulevards of Paris. In
                London, for example, there were at the time some 130 commercial
                establishments where portraits, landscapes, and photographic
                reproductions of works of art could be bought. This appeal to
                the middle class convinced the elite that photographs would
                foster a desire for realism instead of idealism, even though
                some critics recognized that the work of individual
                photographers might display an uplifting style and substance
                that was consistent with the defining characteristics of art.
              </Text>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Write a few sentences about yourself.
              </p>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                Choose appropriate options
              </legend>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                1. What is the writer's main point in the first paragraph?
              </p>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-everything"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    photography is used for many different purposes.
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    photographers and artists have the same principal aims
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-nothing"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Photography has not always been a readily accepted art form
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-nothing"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Photographers today are more creative than those of the past
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
